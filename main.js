const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");
const sections = document.querySelectorAll("section");
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

const hideMenu = () => {
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
  }
};

navLinks.forEach((link) => {
  link.addEventListener("click", hideMenu);
});

const observerOptions = {
  root: null,
  rootMargin: "-100px 0px -50% 0px",
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");

      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      const activeLink = document.querySelector(`.navbar a[href="#${id}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});
