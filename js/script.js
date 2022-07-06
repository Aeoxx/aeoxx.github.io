const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu_link--js");
const overlayMenu = document.querySelector(".overlay--menu");

menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    burger.classList.remove("active");
    burgerMenu.classList.remove("active");
    document.body.classList.remove("noscroll");
    overlayMenu.classList.remove("active");
  });
});

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  document.body.classList.toggle("noscroll");
  burgerMenu.classList.toggle("active");
  overlayMenu.classList.toggle("active");
});

overlayMenu.addEventListener("click", function () {
  overlayMenu.classList.remove("active");
  burger.classList.remove("active");
  burgerMenu.classList.remove("active");
  document.body.classList.remove("noscroll");
});

//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
// а тут вказуємо якщо клас, то з крапкою на початку, а якщо елемент, то без крапки на початку
const modalOpen = document.querySelector(".promo_link");
const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal_close");
const modalVideo = document.querySelector(".video");

//тут ми вказуємо класи без крапочи на початку, бо просто вказуємо, що саме треба написати
modalOpen.addEventListener("click", function () {
  body.classList.add("overlay");
  modal.classList.add("active");
  modalVideo.play();
});

modalClose.addEventListener("click", function () {
  body.classList.remove("overlay");
  modal.classList.remove("active");
  modalVideo.pause();
  modalVideo.currentTime = 0;
});

//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------

const testimonialsSwiper = new Swiper(".testimonials_slider", {
  spaceBetween: 30,
  slidesPerView: 3.5,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesOffsetBefore: 0,
      slidesPerView: 1,
    },
    669: {
      slidesPerView: 1.5,
    },
    810: {
      slidesPerView: 1.8,
    },

    1175: {
      slidesPerView: 2.1,
    },

    1410: {
      slidesPerView: 2.5,
    },

    1800: {
      slidesOffsetBefore: 280,
    },

    2000: {
      slidesOffsetBefore: 300,
    },

    2200: {
      slidesOffsetBefore: 340,
    },
  },
});

const blogSwiper = new Swiper(".blog_slider", {
  spaceBetween: 30,
  slidesPerView: 2.5,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 1.5,
    },
    1100: {
      slidesPerView: 1.7,
    },
    1500: {
      slidesPerView: 2.2,
    },
    1750: {
      slidesPerView: 2.5,
    },
  },
});

const accBtn = document.querySelectorAll(".features_item-link");

accBtn.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const accPanel = this.previousElementSibling;
    const accCard = this.parentNode;
    if (accPanel.style.height) {
      accPanel.style.height = null;
      accCard.style.marginBottom = "0";
    } else {
      accPanel.style.height = accPanel.scrollHeight + "px";
      accCard.style.marginBottom = `-${accPanel.scrollHeight - 40}px`;
    }
  });
});
