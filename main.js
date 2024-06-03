
ScrollReveal().reveal(".order__card", {
  ...scrollRevealOption,
  interval: 500,
});


window.addEventListener('scroll', function(){
  const header = this.document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0)
})

function activeMenu(){
  const toggleMenu = document.querySelector('.menuToggle');
  const navigation = document.querySelector('.navigation');
  toggleMenu.classList.toggle('active');
  navigation.classList.toggle('active');
}




const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// ScrollReveal().reveal(".header__image img", {
//   ...scrollRevealOption,
//   origin: "right",
// });
// ScrollReveal().reveal(".header__content h1", {
//   ...scrollRevealOption,
//   delay: 500,
// });
// ScrollReveal().reveal(".header__content .section__description", {
//   ...scrollRevealOption,
//   delay: 1000,
// });
// ScrollReveal().reveal(".header__content .header__btn", {
//   ...scrollRevealOption,
//   delay: 1500,
// });

// ScrollReveal().reveal(".explore__image img", {
//   ...scrollRevealOption,
//   origin: "left",
// });
// ScrollReveal().reveal(".explore__content .section__header", {
//   ...scrollRevealOption,
//   delay: 500,
// });
// ScrollReveal().reveal(".explore__content .section__description", {
//   ...scrollRevealOption,
//   delay: 1000,
// });
// ScrollReveal().reveal(".explore__content .explore__btn", {
//   ...scrollRevealOption,
//   delay: 1500,
// });

// ScrollReveal().reveal(".banner__card", {
//   ...scrollRevealOption,
//   interval: 500,
// });

// ScrollReveal().reveal(".chef__image img", {
//   ...scrollRevealOption,
//   origin: "right",
// });
// ScrollReveal().reveal(".chef__content .section__header", {
//   ...scrollRevealOption,
//   delay: 500,
// });
// ScrollReveal().reveal(".chef__content .section__description", {
//   ...scrollRevealOption,
//   delay: 1000,
// });
// ScrollReveal().reveal(".chef__list li", {
//   ...scrollRevealOption,
//   delay: 1500,
//   interval: 500,
// });

// const swiper = new Swiper(".swiper", {
//   loop: true,

//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


