let searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=() =>{
   searchForm.classList.toggle('active');
   loginForm.classList.remove('active');
   navbar.classList.remove('active');
}

let loginForm=document.querySelector('.login-form');

document.querySelector('#login-btn').onclick=() =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar=document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick=() =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

var slideIndex = 0;
    showSlides();
    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
    
let counter = 0;
const slideWidth = slides[0].clientWidth;
    
function slideNext() {
    if (counter >= slides.length - 1) return;
    counter++;
    carousel.style.transform = `translateX(${-slideWidth * counter}px)`;
}
    
function slidePrev() {
    if (counter <= 0) return;
    counter--;
    carousel.style.transform = `translateX(${-slideWidth * counter}px)`;
}
    
nextBtn.addEventListener('click', slideNext);
prevBtn.addEventListener('click', slidePrev);
    