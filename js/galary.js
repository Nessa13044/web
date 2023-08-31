let currentSlide = 1;
showSlide(currentSlide);

function changeSlide(n) {
    showSlide(currentSlide += n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    const slideNumbers = document.getElementsByClassName("slide-number");

    if (n > slides.length) {
        currentSlide = 1;
    }

    if (n < 1) {
        currentSlide = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < slideNumbers.length; i++) {
        slideNumbers[i].textContent = currentSlide + " / " + slides.length;
    }

    slides[currentSlide - 1].style.display = "block";
}
