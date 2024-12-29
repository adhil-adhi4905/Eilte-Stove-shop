var slideIndex = 1; // Corrected variable name casing
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides"); // Corrected method name
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 } // Added spaces for readability
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Ensures all slides are hidden
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // Ensure a space before "active"
    }
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
    dots[slideIndex - 1].className += " active"; // Add "active" class to the current dot
}

// auto slide

var slideIndex =0;
showSlides();

function showSlides() {
    var i;
    var slide =document.getElementsByClassName("mySlides");
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display ="none" ;
    }
    slideIndex++;
    if (slideIndex > slide.length) {
        slideIndex = 1
    }
    slide[slideIndex - 1].style.display = "block";
    setTimeout (showSlides, 2000);
   // changge Image every 2 seconds
}

