
// LOADER START
window.addEventListener('load', function() {
  // Hide the loader and show the content once the page is fully loaded
  var loader = document.getElementById('loader');
  var content = document.getElementById('content');
  
  loader.style.display = 'none';
  content.style.display = 'block';
});
// LOADER END


// SCROLL START
// Function to show the scrollbar when the mouse is moved
// Function to show the vertical scrollbar when the mouse is moved
function showVerticalScrollbar() {
  document.body.style.overflowY = 'auto';
}
// Add an event listener to the document to trigger the showVerticalScrollbar function when the mouse is moved
document.addEventListener('mousemove', showVerticalScrollbar);
// SCROLL END


// MENU ICON START
  // JavaScript to handle the menu icon click event and toggle the active class
  const menuIcon = document.querySelector('.menu-icon');
  const navItems = document.querySelector('.nav-items');
  const navbutton = document.querySelector(`.nav-btn`)
  const mainContent = document.querySelector('.wrapper');

  
  menuIcon.addEventListener('click', () => {
    navItems.classList.toggle('active');
    navbutton.classList.toggle(`active`)
    menuIcon.classList.toggle('active');
    mainContent.style.display = mainContent.style.display === 'none' ? 'block' : 'none';
  });
// MENU ICON END


// ACCORDION MENU START
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    accordionItems.forEach((accordionItem) => {
      accordionItem.classList.remove('active');
      accordionItem.querySelector('.accordion-content').style.maxHeight = '0';
    });

    if (!isActive) {
      item.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});
// ACCORDION MENU END



// TESTIMONIAL SLIDER START
// script.js
const slider = document.querySelector('.testimonial-slider');
const sliderContainer = document.querySelector('.slider-container');
const slides = Array.from(document.querySelectorAll('.testimonial-slide'));
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentSlide = 0;
let touchStartX = 0;
let touchEndX = 0;

function showSlide() {
  const slideWidth = slides[0].offsetWidth;
  sliderContainer.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
  updateButtonOpacity();
}

function setActiveSlide() {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add('test-slide-active');
      slide.classList.remove('test-slide-hidden');
    } else {
      slide.classList.remove('test-slide-active');
      slide.classList.add('test-slide-hidden');
    }
  });
}

function nextSlide() {
  if (currentSlide === slides.length - 1) {
    return;
  }
  currentSlide++;
  showSlide();
  setActiveSlide();
}

function prevSlide() {
  if (currentSlide === 0) {
    return;
  }
  currentSlide--;
  showSlide();
  setActiveSlide();
}

function handleTouchStart(e) {
  touchStartX = e.touches[0].clientX;
}

function handleTouchEnd(e) {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipe();
}

function handleSwipe() {
  const swipeThreshold = 100;
  const deltaX = touchEndX - touchStartX;
  
  if (deltaX > swipeThreshold) {
    prevSlide();
  } else if (deltaX < -swipeThreshold) {
    nextSlide();
  }
}

function updateButtonOpacity() {
  if (currentSlide === 0) {
    prevButton.style.opacity = '0.5';
  } else {
    prevButton.style.opacity = '1';
  }

  if (currentSlide === slides.length - 1) {
    nextButton.style.opacity = '0.5';
  } else {
    nextButton.style.opacity = '1';
  }
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
slider.addEventListener('touchstart', handleTouchStart);
slider.addEventListener('touchend', handleTouchEnd);

// Show the initial slide
setActiveSlide();
showSlide();
// TESTIMONIAL SLIDER END
