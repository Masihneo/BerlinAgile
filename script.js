const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const scrollToPageTarget = (hash) => {
  if (!hash || hash === "#") return;
  const target = document.querySelector(hash);
  if (target) target.scrollIntoView({ block: "start" });
};

document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;
  const hash = link.getAttribute("href");
  if (!hash || hash === "#") return;
  event.preventDefault();
  history.pushState(null, "", hash);
  scrollToPageTarget(hash);
});

if (window.location.hash) {
  scrollToPageTarget(window.location.hash);
  window.addEventListener("load", () => scrollToPageTarget(window.location.hash), { once: true });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

document.querySelectorAll(".rhythm-frame").forEach((frame) => {
  const video = frame.querySelector("video");
  const button = frame.querySelector(".video-sound-toggle");
  if (!video || !button) return;

  button.addEventListener("click", async () => {
    const willUnmute = video.muted;
    video.muted = !willUnmute;
    button.classList.toggle("is-on", willUnmute);
    button.setAttribute("aria-pressed", String(willUnmute));
    button.setAttribute("aria-label", willUnmute
      ? (document.documentElement.lang === "de" ? "Ton des Videos ausschalten" : "Turn video sound off")
      : (document.documentElement.lang === "de" ? "Ton des Videos einschalten" : "Turn video sound on"));

    if (willUnmute && video.paused) {
      video.play().catch(() => {});
    }
  });
});

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const status = form.querySelector(".form-status");
    const submitButton = form.querySelector('button[type="submit"]');
    const isGerman = document.documentElement.lang === "de";
    const name = String(formData.get("name") || "").trim();

    formData.set("_subject", isGerman
      ? `Anfrage für ein Kennenlerngespräch von ${name || "Berlinagile Website"}`
      : `Discovery call request from ${name || "Berlinagile website"}`);

    status.textContent = isGerman
      ? "Ihre Anfrage wird gesendet..."
      : "Sending your request...";
    if (submitButton) submitButton.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (!response.ok) throw new Error("Form submission failed");

      form.reset();
      status.textContent = isGerman
        ? "Danke. Ihre Anfrage wurde gesendet."
        : "Thank you. Your request has been sent.";
    } catch (error) {
      status.textContent = isGerman
        ? "Das hat leider nicht geklappt. Bitte schreiben Sie direkt an hello@berlinagile.de."
        : "Something went wrong. Please email hello@berlinagile.de directly.";
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  }, true);

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const contactEmail = form.dataset.contactEmail.trim();
    const status = form.querySelector(".form-status");
    const isGerman = document.documentElement.lang === "de";
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();
    const subject = isGerman
      ? `Anfrage für ein Kennenlerngespräch von ${name}`
      : `Discovery call request from ${name}`;
    const body = isGerman
      ? `Name: ${name}\nE-Mail: ${email}\n\nWorum es geht:\n${message}`
      : `Name: ${name}\nEmail: ${email}\n\nWhat I would like to discuss:\n${message}`;
    const emailUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    status.textContent = isGerman
      ? "Ihre E-Mail-App wird mit der vorbereiteten Anfrage geöffnet."
      : "Your email app is opening with the prepared request.";
    window.location.href = emailUrl;
  });
}
