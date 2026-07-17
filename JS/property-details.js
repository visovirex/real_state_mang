// ===============================
// Mobile Menu Toggle
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navButtons = document.querySelector(".nav-buttons");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  navButtons.classList.toggle("active");

  const icon = menuBtn.querySelector("i");

  if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

// ===============================
// Close Menu When Clicking a Link
// ===============================

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    navButtons.classList.remove("active");

    const icon = menuBtn.querySelector("i");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});
// ===============================
// Hero Fade Animation
// ===============================

window.addEventListener("load", () => {
  const hero = document.querySelector(".property-hero-content");

  hero.style.opacity = "0";

  hero.style.transform = "translateY(40px)";

  hero.style.transition = ".8s";

  setTimeout(() => {
    hero.style.opacity = "1";

    hero.style.transform = "translateY(0)";
  }, 200);
});
