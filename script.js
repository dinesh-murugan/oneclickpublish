// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', function () {
    navLinks.classList.toggle('mobile-hidden');
  });

  // Close menu when a link is clicked
  const navLinksArray = navLinks.querySelectorAll('a');
  navLinksArray.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.classList.add('mobile-hidden');
    });
  });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add scroll effect to navigation
window.addEventListener('scroll', function () {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 10) {
    nav.style.boxShadow = '0 4px 12px rgba(30, 144, 255, 0.1)';
  } else {
    nav.style.boxShadow = '0 2px 8px rgba(30, 144, 255, 0.05)';
  }
});

// Intersection Observer for fade-in animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.scard').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});

// Button click handlers
document.querySelectorAll('.hero-btn, .cta-btn').forEach(button => {
  button.addEventListener('click', function () {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Open LinkedIn link
const linkedinLinks = document.querySelectorAll('a[href*="linkedin.com"]');
linkedinLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    window.open(this.href, '_blank', 'noopener,noreferrer');
  });
});

// Open email link
const emailLinks = document.querySelectorAll('a[href*="mailto"]');
emailLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = this.href;
  });
});

console.log('oneclickpublish website loaded successfully!');
