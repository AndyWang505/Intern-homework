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

});
