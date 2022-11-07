const swiper = new Swiper('.logo-slider', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay: {
        delay: 5000,
      },
      breakpoints: {
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },

        768: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      },
    pagination: {
      el: '.logo-slider-pagination',
      clickable: true,
    },
  });