let searchbtn = document.querySelector('#search-btn');
let searchbar = document.querySelector('.search-bar-container');
let formbtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.search-bar-container');
let formclose = document.querySelector('form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

let videobtn = document.querySelectorAll('.vid-btn');

window.onscroll = ()=>{
    searchbtn.classList.remove('fa-times');
    searchbar.classList.remove('active');
    menu.classList.remove('active');
    navbar.classList.remove('fa-times');
   loginForm.classList.remove('active');
}
menu.addEventListener('click',()=>{
    menu.classList.toggle('active');
    navbar.classList.toggle('fa-times');
 });

 searchbtn.addEventListener('click',()=>{
    searchbar.classList.toggle('active');
    searchbtn.classList.toggle('fa-times');
 });

 formclose.addEventListener('click',()=>{
    loginForm.classList.toggle('active');
    
 });
 videobtn .forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls.active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay:{
      delay:2500,
      disableOnInteraction:false,
    },
    breakpoints:{
      640:{
         slidesPerView:1,
      },
      768:{
         slidesPerView:2,
      },
      1024:{
         slidesPerView:3,
      },
    },
});
var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay:{
      delay:2500,
      disableOnInteraction:false,
    },
    breakpoints:{
      450:{
         slidesPerView:2,
      },
      768:{
         slidesPerView:3,
      },
      991:{
         slidesPerView:4,
      },
      1200:{
         slidesPerView:5,
      },
    },
});