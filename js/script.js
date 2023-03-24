let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .flex .navbar");
// let slider = document.querySelector(".carousel-inner");

// const Links = [
//   { url: "https://www.youtube.com/embed/oni7Rw3qNpk" },
//   { url: "https://www.youtube.com/embed/oni7Rw3qNpk" },
//   { url: "https://www.youtube.com/embed/oni7Rw3qNpk" },
//   { url: "https://www.youtube.com/embed/oni7Rw3qNpk" },
//   { url: "https://www.youtube.com/embed/oni7Rw3qNpk" },
//   { url: "https://www.youtube.com/embed/oni7Rw3qNpk" },

//   { url: "https://www.youtube.com/embed/oni7Rw3qNpk" },
//   { url: "https://www.youtube.com/embed/oni7Rw3qNpk" },
// ];

// slider.innerHTML = Links.map(
//   (item) => `
// <!-- <div class="carousel-item ">
//      <center> <iframe width="560" height="315" src=${item.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

//      </center></div>`
// );

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menuBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".course-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".teachers-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
