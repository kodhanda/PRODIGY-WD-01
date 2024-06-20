document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('main > section');
    const navLinks = document.querySelectorAll('#navbar ul li a');
  
    // Handle click on navigation links
    navLinks.forEach(function(navLink) {
      navLink.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        // Hide all sections
        sections.forEach(function(section) {
          section.classList.remove('active');
        });
  
        // Show the clicked section
        targetSection.classList.add('active');
      });
    });
  
    // Change style on hover for sections
    sections.forEach(function(section) {
      section.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#f0f0f0';
      });
      section.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
      });
    });
  
    // Change navigation style on scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('nav-scrolled');
      } else {
        header.classList.remove('nav-scrolled');
      }
    });
  });
  