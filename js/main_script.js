$(document).ready(function(){
    var thumbbg = new Swiper('.thumbnail_bg', {
        spaceBetween: 0,
        loop: true,
        simulateTouch: false,
        speed: 500,
        //autoplay:2000,
        autoplayDisableOnInteraction: false,
        effect:'fade',
    });

	var swiper = new Swiper('.thumbnail_box', {
        spaceBetween: 0,
        loop: true,
        simulateTouch: false,
        speed: 2000,
        //autoplay:2000,
        autoplayDisableOnInteraction: false,
    });

    var bullet = ['1번', '2번', '3번', '4번', '5번', '6번', '7번', '8번'];
    var thumbs = new Swiper('.thumbnail_title', {
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        direction: 'vertical',
		simulateTouch: false,
        slideToClickedSlide: true,
		nextButton: '.buttons .swiper-button-next',
        prevButton: '.buttons .swiper-button-prev',
        speed: 2000,
        pagination:{
			el: ".swiper-pagination",
			clickable: true,
            type : 'bullets',
			renderBullet: function (index, className) {
    	    return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
  	        }
		},
    });

   swiper.params.control = thumbs;
   swiper.params.control = thumbbg;
   thumbs.params.control = swiper;
});
