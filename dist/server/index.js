const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp4": "video/mp4",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".woff2": "font/woff2",
};

function contentType(pathname) {
  const extension = pathname.slice(pathname.lastIndexOf("."));
  return MIME_TYPES[extension] || "application/octet-stream";
}

async function serveAsset(request, env) {
  const url = new URL(request.url);
  let pathname = decodeURIComponent(url.pathname);

  if (pathname === "/") {
    pathname = "/index-de.html";
  }

  const assetRequest = new Request(new URL(pathname, url.origin), request);
  const response = await env.ASSETS.fetch(assetRequest);

  if (response.status === 404 && !pathname.endsWith(".html")) {
    const htmlRequest = new Request(new URL(`${pathname}.html`, url.origin), request);
    const htmlResponse = await env.ASSETS.fetch(htmlRequest);
    if (htmlResponse.status !== 404) {
      return withHeaders(htmlResponse, `${pathname}.html`);
    }
  }

  return withHeaders(response, pathname);
}

function withHeaders(response, pathname) {
  const headers = new Headers(response.headers);
  headers.set("content-type", contentType(pathname));
  headers.set("x-content-type-options", "nosniff");
  headers.set("referrer-policy", "strict-origin-when-cross-origin");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  fetch: serveAsset,
};
