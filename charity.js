/** */
let menu = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  }
  window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active')
  }




//toast notification

const toast = document.getElementById('toast');

//Array of messages to cycle through 
const messages = [
    "Santino Moralus just donated $3,300 to our platform!",
    "Christiana Rose just donated $12,520 to our platform!",
    "Peterson just donated $1,230 to our platform!",
    "Jessica just donated $320 to our platform!",
    "Jordan  Moralus just donated $4,110 to our platform!",
    "Jenna Frank just donated $500 to our platform!",
    "Stephen just donated $750 to our platform!",
    "Pauliver just donated $10,300 to our platform!",
    "Henry Mug just donated $4,800 to our platform!",
];
let messageIndex = 0;

//Function to show toast with changing text
function showToast() {
   toast.textContent = messages[messageIndex]; //set toast text to current message
   toast.classList.add('show');

   //Move to next message (cycles through the array)
   messageIndex = (messageIndex + 1) % messages.length;

   setTimeout (() => {
    toast.classList.remove('show');
   }, 3000); // Toast visible for 3secs
}

//Infinite loop to show and hide toast
function toastLoop() {
    showToast();
    setTimeout(toastLoop, 5000); //Toast reappears every 4 secs (1sec after it disappears)
}
//start the loop
toastLoop()

//Card Slider//
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});