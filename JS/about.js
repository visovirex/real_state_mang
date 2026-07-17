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

if(storyBtn){

    storyBtn.addEventListener("mouseenter",()=>{

        storyBtn.style.transform="translateY(-4px)";

    });

    storyBtn.addEventListener("mouseleave",()=>{

        storyBtn.style.transform="translateY(0)";

    });

}