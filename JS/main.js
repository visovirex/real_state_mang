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
// Sticky Navbar Shadow
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";
  } else {
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";
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
// Hero Counter Animation
// ===============================

const counters = document.querySelectorAll(".stat h2");

const speed = 200;

const animateCounter = () => {
  counters.forEach((counter) => {
    const target = Number(counter.innerText.replace(/\D/g, ""));

    let count = 0;

    const update = () => {
      const increment = Math.ceil(target / speed);

      count += increment;

      if (count < target) {
        counter.innerText = count + "+";

        requestAnimationFrame(update);
      } else {
        counter.innerText = target + "+";
      }
    };

    update();
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounter();

      observer.disconnect();
    }
  });
});

observer.observe(document.querySelector(".hero"));

// ===============================
// Property Search
// ===============================

const searchButton = document.querySelector(".search-btn");

if (searchButton) {
  searchButton.addEventListener("click", () => {
    const location = document.querySelector("input").value;

    const propertyType = document.querySelectorAll("select")[0].value;

    const price = document.querySelectorAll("select")[1].value;

    const bedrooms = document.querySelectorAll("select")[2].value;

    console.log({
      location,
      propertyType,
      price,
      bedrooms,
    });

    alert("Search feature will be connected to the backend later.");
  });
}

// ===============================
// Favorite Button
// ===============================

const favorites = document.querySelectorAll(".favorite-btn");

favorites.forEach((button) => {
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
// Category Card Click Effect
// ===============================

const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach((card) => {
  card.addEventListener("click", () => {
    const category = card.querySelector("h3").textContent;

    alert(`Showing ${category} properties...`);

    // Later:
    // window.location.href = `properties.html?category=${category}`;
  });
});
// ===============================
// Why Choose Us Animation
// ===============================

const whyCards = document.querySelectorAll(".why-card");

whyCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 20px 40px rgba(37,99,235,.20)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
  });
});
// ===============================
// Agent Card Animation
// ===============================

const agentCards = document.querySelectorAll(".agent-card");

agentCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 20px 40px rgba(37,99,235,.18)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
  });
});
// ===============================
// Testimonial Slider
// ===============================

const track = document.querySelector(".testimonial-track");

if (track) {
  const slides = document.querySelectorAll(".testimonial-card");

  let index = 0;

  function slideTestimonials() {
    index++;

    if (index >= slides.length) {
      index = 0;
    }

    track.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(slideTestimonials, 4000);
}
// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});
