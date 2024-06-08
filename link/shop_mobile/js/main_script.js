$(document).ready(function(){
	/************************* main *************************/
	//nav
	$(".hamburger_button").click(function(){
		$(".nav_wrap").fadeIn(300);
		$(".nav_content_wrap").fadeIn(300);
		$(".nav_background").fadeIn(300);
		$(".nav_content").animate({
			left : "0"
		},300);
		$('body').css("overflow","hidden");
	});

	$(".nav_top figure").click(function(){
		$(".nav_wrap").fadeOut(500);
		$(".nav_background").fadeOut(300);
		$(".nav_content").animate({
			left : "-256px"
		},300);
		$('body').css("overflow","auto");
	});

	$(".black_tab").click(function(){
		$(this).next(".nav_list_wrap").slideToggle(300).siblings(".nav_list_wrap").slideUp(300);
	});

	//main_visual_slider
	$(".main_visual_slider").slick({
		autoplay:true,
		infinite:true,
		slidesToShow:1,
		dots:false,
		arrows:false,
		speed:600,
		pauseOnFocus:false,
		pauseOnHover:false,
	});

	//best_products_slider
	$(".best_products_slider").slick({
		autoplay:false,
		infinite:false,
		slidesToShow:2,
		dots:true,
		arrows:false,
		speed:600,
		pauseOnFocus:false,
		pauseOnHover:false,
	});

	//products_tabs
	$(".tab_contents").hide();
		$(".tab_contents:first").show();
		$("ul.products_tabs li").click(function(){
			$("ul.products_tabs li").removeClass("maintab_active");
			$(this).addClass("maintab_active");
			$(".tab_contents").fadeOut(50);
			var activeTab = $(this).attr("rel");
			$("#"+activeTab).fadeIn(100);
		});

	
	/************************* sub1: list *************************/

	//product_list_tabs
	$(".list_contents").hide();
	$(".list_contents:first").show();
	$("ul.product_list_tabs li").click(function(){
		$("ul.product_list_tabs li").removeClass("subtab_active");
		$(this).addClass("subtab_active");
		$(".list_contents").fadeOut(50);
		var activeTab = $(this).attr("rel");
		$("#"+activeTab).fadeIn(100);
	});

	//list_dropdown_top
	$(".list_dropdown_top").click(function(){
		if($(".list_dropdown_down > ul").css("display")=="none"){
			$(".list_dropdown_down > ul").slideDown();
			$(".list_dropdown_top .text_box .arrowdown").css("display","none");
			$(".list_dropdown_top .text_box .arrowup").css("display","block");
		}else{
			$(".list_dropdown_down > ul").slideUp();
			$(".list_dropdown_top .text_box .arrowdown").css("display","block");
			$(".list_dropdown_top .text_box .arrowup").css("display","none");
		}
	});


	/************************* sub2: detail *************************/

	//product_info_slider
	$(".product_info_slider").slick({
		autoplay:false,
		infinite:true,
		slidesToShow:1,
		dots:false,
		arrows:true,
		prevArrow:$("#SlidePrev"),
		nextArrow:$("#SlideNext"),
		speed:600,
		pauseOnFocus:false,
		pauseOnHover:false,
	});

	//heart_button
	$(".heart_button").click(function(){
		if($(".heart_check").css("display")=="none"){
			$(".heart_check").show();
			$(".heart_nocheck").css("display","none");
		}else{
			$(".heart_check").hide();
			$(".heart_nocheck").css("display","block");
		}
	});

	//list_morebox
	$(".list_morebox").click(function(){
		if($(".notification_bottom").css("display")=="none"){
			$(".notification_bottom").show();
			$(".list_morebox .close").css("display","block");
			$(".list_morebox .dropdown_close").css("display","block");
			$(".list_morebox .open").css("display","none");
			$(".list_morebox .dropdown_open").css("display","none");
		}else{
			$(".notification_bottom").hide();
			$(".list_morebox .close").css("display","none");
			$(".list_morebox .dropdown_close").css("display","none");
			$(".list_morebox .open").css("display","block");
			$(".list_morebox .dropdown_open").css("display","block");
		}
	});

	//caution
	$(".caution .text_wrap").click(function(){
		if($(".caution_content").css("display")=="none"){
			$(".caution_content").show();
			$(".arrow_down").css("display","none");
			$(".arrow_up").css("display","block");
		}else{
			$(".caution_content").hide();
			$(".arrow_down").css("display","block");
			$(".arrow_up").css("display","none");
		}
	});
});
