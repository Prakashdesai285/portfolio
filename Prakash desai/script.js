/* ===== SMOOTH SCROLL ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile nav if open
    document.getElementById('mobileNav').classList.remove('open');
  });
});


/* ===== HAMBURGER TOGGLE ===== */
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileNav').classList.toggle('open');
});


/* ===== ACTIVE NAV ON SCROLL ===== */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function setActiveLink() {
  let current = "";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", setActiveLink);


/* ===== HEADER BLUR ON SCROLL ===== */
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (header) {
    header.style.background = window.scrollY > 40
      ? "rgba(13,17,23,0.95)"
      : "rgba(13,17,23,0.85)";
  }
});


/* ===== CARD ENTRANCE ANIMATION (IntersectionObserver) ===== */
const observeTargets = document.querySelectorAll('.card, .project-card, .timeline-content, .contact-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

observeTargets.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
