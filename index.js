// Navigation Bar Toggle Script
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});

// animation script 
document.addEventListener("DOMContentLoaded", function() {
  // Function to handle click on navbar links
  document.querySelectorAll('.nav-links').forEach(function(link) {
    link.addEventListener('click', function(event) {
      // Get the target content section's ID from the href attribute
      var targetId = this.getAttribute('href').substring(1);
      
      // Show the target content section with animation
      var targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.style.display = 'block';
        targetSection.style.animation = 'slideInFromBottom 1s ease forwards';
      }
      
      // Hide other content sections
      document.querySelectorAll('.content-section').forEach(function(section) {
        if (section.id !== targetId) {
          section.style.display = 'none';
        }
      });
    });
  });
});


// Text Typing Script
const words = ["Developer. ", "Coder ", "UI/UX Designer "];
let index = 0;
const paragraph = document.getElementById("typing");
const staticText = "a ";
const textColor = "white";
const dash = "|";

function typeWord() {
  const word = words[index];
  let i = 0;

  function type() {
    if (i < word.length) {
      paragraph.innerHTML =
        staticText +
        `<span style="color:${textColor}">${word.substring(0, i)}</span>` + dash;
      i++;
      setTimeout(type, 100);
    } else {
      setTimeout(eraseWord, 500);
    }
  }
  // function call 
  type();
}
// text erasing script 
function eraseWord() {
  let i = words[index].length;

  function erase() {
    if (i >= 0) {
      paragraph.innerHTML =
        staticText +
        `<span style="color:${textColor}">${words[index].substring(
          0,
          i
        )}</span>` + dash;
      i--;
      setTimeout(erase, 100);
    } else {
      index = (index + 1) % words.length;
      setTimeout(typeWord, 500);
    }
  }
  // function call 
  erase();
}

typeWord();

// Swiper js for automatic change of slider 
var swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Slider Script 
(function ($) {

  "use strict";

  // Testimonial Carousel creation 
  if ($('.testimonial-carousel').length) {
    $('.testimonial-carousel').owlCarousel({
      animateOut: 'slideOutDown',
      animateIn: 'zoomIn',
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 300,
      autoplay: 7000,
      navText: ['<span class="arrow-left"></span>', '<span class="arrow-right"></span>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        800: {
          items: 1
        },
        1024: {
          items: 1
        }
      }
    });
  }

})(window.jQuery);
