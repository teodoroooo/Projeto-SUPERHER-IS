var slides = document.querySelectorAll('.slide');
var currentIndex = 0;
var intervalTime = 3000;

function showSlide(index) {
 slides[currentIndex].classList.remove('active');
 slides[index].classList.add('active');
  currentIndex = index;
}

function nextSlide() {
 showSlide(currentIndex + 1);
 if (currentIndex + 1 == slides.length) {
    currentIndex = -1;
 }
}

function prevSlide() {
 showSlide(currentIndex - 1);
 if (currentIndex - 1 == -1) {
    currentIndex = slides.length;
 }
}

document.querySelector('.next').addEventListener('click', function() {
 nextSlide();
});

document.querySelector('.prev').addEventListener('click', function() {
 prevSlide();
});

// automated slide show
setInterval(function() {
 nextSlide();
}, intervalTime);