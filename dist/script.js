const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

if (menuButton && navigation) {
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
}

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

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
}

document.querySelectorAll("[data-mail-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const values = new FormData(form);
    const isGerman = document.documentElement.lang === "de";
    const name = String(values.get("name") || "").trim();
    const email = String(values.get("email") || "").trim();
    const level = String(values.get("level") || "").trim();
    const deadline = String(values.get("deadline") || "").trim();
    const message = String(values.get("message") || "").trim();
    const targetEmail = form.dataset.contactEmail;
    const subject = isGerman ? `Deutsch-Sprint-Anfrage von ${name}` : `Deutsch-Sprint request from ${name}`;
    const body = isGerman
      ? `Name: ${name}\nE-Mail: ${email}\nZielniveau: ${level}\nPrüfungstermin oder Frist: ${deadline || "Nicht angegeben"}\n\nNachricht:\n${message}`
      : `Name: ${name}\nEmail: ${email}\nTarget level: ${level}\nExam date or deadline: ${deadline || "Not provided"}\n\nMessage:\n${message}`;
    const status = form.querySelector(".form-status");
    if (status) status.textContent = isGerman
      ? "Ihre E-Mail-App wird mit der vorbereiteten Anfrage geöffnet."
      : "Your email app is opening with the prepared request.";
    window.location.href = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});
