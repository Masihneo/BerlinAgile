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

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const target = Number(entry.target.dataset.target);
    const duration = 1000;
    const start = performance.now();

    const count = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      entry.target.textContent = String(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) requestAnimationFrame(count);
    };

    requestAnimationFrame(count);
    statObserver.unobserve(entry.target);
  });
}, { threshold: 0.6 });

document.querySelectorAll("[data-target]").forEach((stat) => statObserver.observe(stat));

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const calendlyUrl = form.dataset.calendlyUrl.trim();
    const status = form.querySelector(".form-status");

    if (!calendlyUrl) {
      status.textContent = "Add your Calendly event link to activate booking.";
      return;
    }

    const bookingUrl = new URL(calendlyUrl);
    bookingUrl.searchParams.set("name", formData.get("name").trim());
    bookingUrl.searchParams.set("email", formData.get("email").trim());
    bookingUrl.searchParams.set("a1", formData.get("message").trim());
    window.location.assign(bookingUrl.toString());
  });
}
