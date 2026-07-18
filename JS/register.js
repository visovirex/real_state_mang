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
// Register Hero Animation
// ===============================

window.addEventListener("load", () => {
  const hero = document.querySelector(".register-hero-content");

  hero.style.opacity = "0";
  hero.style.transform = "translateY(40px)";
  hero.style.transition = ".8s";

  setTimeout(() => {
    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";
  }, 200);
});
// ===============================
// Show / Hide Password
// ===============================

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

function toggleField(input, icon) {
  if (input.type === "password") {
    input.type = "text";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  }
}

if (togglePassword) {
  togglePassword.addEventListener("click", () => {
    toggleField(password, togglePassword);
  });
}

if (toggleConfirmPassword) {
  toggleConfirmPassword.addEventListener("click", () => {
    toggleField(confirmPassword, toggleConfirmPassword);
  });
}

// ===============================
// Register Form
// ===============================

const registerForm = document.querySelector(".register-form");

if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (password.value !== confirmPassword.value) {
      alert("Passwords do not match.");

      return;
    }

    alert("Registration functionality will be connected to the backend later.");
  });
}
// ===============================
// Why Join Card Hover Effect
// ===============================

const joinCards = document.querySelectorAll(".join-card");

joinCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 20px 40px rgba(37,99,235,.18)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
  });
});
// ===============================
// CTA Button Hover Effect
// ===============================

const registerCtaButtons = document.querySelectorAll(
  ".primary-btn, .secondary-btn",
);

registerCtaButtons.forEach((button) => {
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

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  });
}
