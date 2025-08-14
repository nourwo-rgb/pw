const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Show scroll-to-top button only when scrolled down
const scrollBtn = document.getElementById('scrollToTopBtn');
window.onscroll = function() {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// ======= MOBILE NAVBAR TOGGLE =======
const navToggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.navbar');

if (navToggle && navbar) {
  navToggle.addEventListener('click', function () {
    navbar.classList.toggle('active');
    // Update aria-expanded for accessibility
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !expanded);
  });

  // Optional: Hide navbar after clicking a link (for better UX)
  navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        navbar.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

