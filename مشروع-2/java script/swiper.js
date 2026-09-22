
let swiperElement = document.querySelectorAll(".mySwiper");

for(let i=0;i<swiperElement.length;i++){
let swiper = new Swiper(swiperElement[i], {
    slidesPerView: 4,
    spaceBetween: 20,

    loop: true,

    speed: 3000,

    autoplay: {
        delay: 0,
        disableOnInteraction: false
    },

    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 10
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 15
        },

        992: {
            slidesPerView: 5,
            spaceBetween: 20
        }
    }
});



swiperElement[i].onmouseenter = function () {
    swiper.autoplay.stop();
};

swiperElement[i].onmouseleave = function () {
    swiper.autoplay.start();
};
}