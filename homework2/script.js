$(document).ready(function(){
    //滑動置頂
    $(".top a").on('click',function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 50);
    });
    //滑動置底
    $(".connact").on('click',function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $('body').height()
        }, 50);
    });
    //下拉選單
    $(".dropdown").on('click',function(event) {
        event.preventDefault();
        $(".dropdown").toggleClass("active");
        $(".dropdown-open").slideToggle();
    });
    //lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });
});
//swiper
var swiper = new Swiper(".mySwiper", {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 4000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});