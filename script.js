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

