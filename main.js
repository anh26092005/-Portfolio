// --- TOÀN BỘ FILE JAVASCRIPT ---

document.addEventListener("DOMContentLoaded", function () {
  // --- STICKY HEADER & ACTIVE LINK ON SCROLL ---
  const header = document.querySelector(".header");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");

  window.addEventListener("scroll", () => {
    // Sticky Header
    header.classList.toggle("sticky", window.scrollY > 100);

    // Active link scrolling
    let currentSectionId = "";
    sections.forEach((sec) => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        currentSectionId = id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + currentSectionId) {
        link.classList.add("active");
      }
    });
  });

  // --- MOBILE MENU TOGGLE ---
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x"); // Toggle icon to 'X'
    navbar.classList.toggle("active"); // Toggle navbar visibility
  });

  // Close menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    });
  });

  // --- SKILL BAR ANIMATION ON SCROLL ---
  const skillsSection = document.querySelector("#skills");
  if (skillsSection) {
    const skillsObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skillsSection.classList.add("skills-in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.8 }
    );

    skillsObserver.observe(skillsSection);
  }
});
// Lấy phần tử nút "Về đầu trang"
const backToTopBtn = document.getElementById("backToTopBtn");

// Hàm xử lý việc hiển thị/ẩn nút dựa trên vị trí cuộn
window.addEventListener("scroll", () => {
  // Nếu người dùng cuộn xuống hơn 300px
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("active"); // Thêm class 'active' để hiện nút
  } else {
    backToTopBtn.classList.remove("active"); // Xóa class 'active' để ẩn nút
  }
});
