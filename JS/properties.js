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
// Page Header Animation
// ===============================

window.addEventListener("load", () => {
  const header = document.querySelector(".page-header-content");

  header.style.opacity = "0";
  header.style.transform = "translateY(40px)";
  header.style.transition = ".8s ease";

  setTimeout(() => {
    header.style.opacity = "1";
    header.style.transform = "translateY(0)";
  }, 200);
});
// ===============================
// Search Button
// ===============================

const searchBtn = document.querySelector(".search-btn");

if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    alert("Property search will be connected to the backend later.");
  });
}
// ===============================
// Favorite Button
// ===============================

const favoriteButtons = document.querySelectorAll(".favorite-btn");

favoriteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const icon = button.querySelector("i");

    icon.classList.toggle("fa-regular");
    icon.classList.toggle("fa-solid");

    if (icon.classList.contains("fa-solid")) {
      icon.style.color = "red";
    } else {
      icon.style.color = "";
    }
  });
});
// ===============================
// Pagination
// ===============================

const pageNumbers = document.querySelectorAll(".page-number");

pageNumbers.forEach((page) => {
  page.addEventListener("click", function (e) {
    e.preventDefault();

    pageNumbers.forEach((item) => {
      item.classList.remove("active");
    });

    this.classList.add("active");
  });
});
// ===============================
// CTA Button Hover Effect
// ===============================

const ctaButtons = document.querySelectorAll(
  ".cta-btn-primary, .cta-btn-secondary",
);

ctaButtons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-4px)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0)";
  });
});
// ===============================
// Scroll To Top
// ===============================

const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});
