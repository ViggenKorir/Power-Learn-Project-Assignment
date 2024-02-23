// Function to toggle the menu
function toggleMenu() {
    var menuToggle = document.querySelector('.menu-toggle');
    var dropdown = document.getElementById('myDropdown');
  
    menuToggle.classList.toggle('menu-open');
    dropdown.classList.toggle('dropdown-show');
  }
  
  // Function to scroll to the top of the page
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Show/hide scroll to top button based on scroll position
  window.onscroll = function() {
    var scrollToTopButton = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  }