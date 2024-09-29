const backButton = document.getElementById('backtoTop');

// Scroll to top functionality
backButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Show/hide the button based on scroll position
window.onscroll = function() {
    if (window.scrollY > 200) { // Show the button when scrolled down 200px
        backButton.style.display = "block";
    } else {
        backButton.style.display = "none";
    }
};

// Initially hide the button
backButton.style.display = "none";