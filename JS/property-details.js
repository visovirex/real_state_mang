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
// ===============================
// Property Gallery
// ===============================

const mainImage = document.getElementById("mainPropertyImage");

const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    mainImage.src = thumbnail.src;

    thumbnails.forEach((item) => {
      item.classList.remove("active");
    });

    thumbnail.classList.add("active");
  });
});
// ===============================
// Contact Buttons
// ===============================

const contactAgent = document.querySelector(".contact-agent");
const scheduleVisit = document.querySelector(".schedule-visit");

if (contactAgent) {
  contactAgent.addEventListener("click", () => {
    alert("Contact form will be connected later.");
  });
}

if (scheduleVisit) {
  scheduleVisit.addEventListener("click", () => {
    alert("Schedule visit feature will be connected later.");
  });
}
// ===============================
// Feature Animation
// ===============================

const featureItems = document.querySelectorAll(".features-card li");

featureItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "translateX(8px)";
    item.style.transition = ".3s";
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "translateX(0)";
  });
});
// ===============================
// Amenities Hover Animation
// ===============================

const amenityCards = document.querySelectorAll(".amenity-card");

amenityCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 15px 35px rgba(37,99,235,.2)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
  });
});
// ===============================
// Floor Plan Image Zoom
// ===============================

const floorPlan = document.querySelector(".floor-plan-image img");

if (floorPlan) {
  floorPlan.addEventListener("mouseenter", () => {
    floorPlan.style.transform = "scale(1.03)";
    floorPlan.style.transition = ".4s";
  });

  floorPlan.addEventListener("mouseleave", () => {
    floorPlan.style.transform = "scale(1)";
  });
}
// ===============================
// Nearby Places Hover Effect
// ===============================

const nearbyItems = document.querySelectorAll(".nearby-card li");

nearbyItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.paddingLeft = "10px";
    item.style.transition = ".3s";
  });

  item.addEventListener("mouseleave", () => {
    item.style.paddingLeft = "0";
  });
});
// ===============================
// Agent Social Icons
// ===============================

const socialIcons = document.querySelectorAll(".agent-social a");

socialIcons.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    icon.style.transform = "translateY(-5px)";
  });

  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "translateY(0)";
  });
});
// ===============================
// Inquiry Form
// ===============================

const inquiryForm = document.querySelector(".inquiry-form");

if (inquiryForm) {
  inquiryForm.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Your inquiry has been submitted successfully!");

    inquiryForm.reset();
  });
}
// ===============================
// Similar Property Cards
// ===============================

const similarCards = document.querySelectorAll(".similar-card");

similarCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 18px 40px rgba(37,99,235,.18)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
  });
});
// ===============================
// CTA Buttons
// ===============================

const ctaBtns = document.querySelectorAll(".primary-btn, .secondary-btn");

ctaBtns.forEach((button) => {
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
