(() => {
  const routes = {
    "index.html": "index-de.html",
    "about.html": "about-de.html",
    "research.html": "research-de.html"
  };
  const path = window.location.pathname;
  const file = path.split("/").pop() || "index.html";
  const isGermanPage = file.endsWith("-de.html");
  const englishFile = isGermanPage ? file.replace("-de.html", ".html") : file;
  const germanFile = routes[englishFile];

  if (!germanFile) return;

  const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
  if (requestedLanguage === "de" || requestedLanguage === "en") {
    localStorage.setItem("berlinagile-language", requestedLanguage);
  }
  const savedLanguage = requestedLanguage || localStorage.getItem("berlinagile-language");
  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  const primaryLocale = String(browserLanguages[0] || "").toLowerCase();
  const prefersGerman = primaryLocale === "de" || primaryLocale === "de-de" || primaryLocale === "de-at";
  const desiredLanguage = savedLanguage || (prefersGerman ? "de" : "en");

  if (desiredLanguage === "de" && !isGermanPage) {
    window.location.replace(path.replace(/[^/]*$/, germanFile) + window.location.search + window.location.hash);
    return;
  }
  if (desiredLanguage === "en" && isGermanPage) {
    window.location.replace(path.replace(/[^/]*$/, englishFile) + window.location.search + window.location.hash);
    return;
  }

  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-language]").forEach((link) => {
      link.addEventListener("click", () => {
        localStorage.setItem("berlinagile-language", link.dataset.language);
      });
    });
  });
})();
