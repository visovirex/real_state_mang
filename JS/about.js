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
// About Hero Animation
// ===============================

window.addEventListener("load", () => {
  const content = document.querySelector(".about-content");

  content.style.opacity = "0";
  content.style.transform = "translateY(40px)";
  content.style.transition = ".8s";

  setTimeout(() => {
    content.style.opacity = "1";
    content.style.transform = "translateY(0)";
  }, 200);
});
// ===============================
// Story Button Animation
// ===============================

const storyBtn = document.querySelector(".story-btn");

if (storyBtn) {
  storyBtn.addEventListener("mouseenter", () => {
    storyBtn.style.transform = "translateY(-4px)";
  });

  storyBtn.addEventListener("mouseleave", () => {
    storyBtn.style.transform = "translateY(0)";
  });
}
// ===============================
// Mission & Vision Cards
// ===============================

const missionCards = document.querySelectorAll(".mission-card");

missionCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 20px 40px rgba(37,99,235,.18)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
  });
});
// ===============================
// Why Choose Us Cards
// ===============================

const chooseCards = document.querySelectorAll(".choose-card");

chooseCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 18px 40px rgba(37,99,235,.18)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
  });
});
// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {
  counters.forEach((counter) => {
    const target = +counter.dataset.target;

    let count = 0;

    const speed = target / 100;

    const updateCounter = () => {
      count += speed;

      if (count < target) {
        counter.innerText = Math.ceil(count);

        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target + "+";
      }
    };

    updateCounter();
  });
};

const statsSection = document.querySelector(".company-stats");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startCounter();

      observer.unobserve(statsSection);
    }
  });
});

observer.observe(statsSection);
// ===============================
// Team Cards
// ===============================

const teamCards = document.querySelectorAll(".team-card");

teamCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 20px 40px rgba(37,99,235,.18)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
  });
});
// ===============================
// Testimonial Cards
// ===============================

const testimonialCards = document.querySelectorAll(".testimonial-card");

testimonialCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 20px 40px rgba(37,99,235,.18)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
  });
});
// ===============================
// CTA Button Animation
// ===============================

const ctaButtons = document.querySelectorAll(".primary-btn, .secondary-btn");

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

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  });
}
