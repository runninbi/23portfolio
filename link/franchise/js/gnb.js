/* gnb begin */
$(function(){
	$(".snbWrap").hide();
	$(".headerWrap #gnb > li").mouseover(function(){
		$(".snbWrap").slideDown("fast");
		$(".gnbBg").fadeIn(300);
		//return false;

		//header_change
		/*var header_change = $("#header_change").offset();

		$(window).scroll(function(){
			var docScrolly = $(document).scrollTop();
			var barThis = $("#header_change");

			if(docScrolly > header_change.top){
				barThis.addClass("header_black");	
			}else{
				barThis.removeClass("header_black");
			}
		});*/
	});




	// if(gid == 0) {
	// 	$(".headerWrap").addClass("main_header_style");
	// 	$('.logo a img').attr("src","http://logosimg.cafe24.com/dmc/image/common/logo_w.png");
	// 	$('.header').css('border-bottom','none');
	// 	$(".headerWrap #gnb > li").mouseover(function(){
	// 		$('.logo a img').attr("src","http://logosimg.cafe24.com/dmc/image/common/logo.png");
	// 		$('.top_quick .tel').css({color:'#000', borderColor:'#676b6e'});
	// 		$('.header').css('background','#fff');
	// 		$('#gnb > li a').css('color','#676b6e');
	// 	});
	// 	$(".headerWrap").mouseleave(function(){
	// 		$('.logo a img').attr("src","http://logosimg.cafe24.com/dmc/image/common/logo_w.png");
	// 		$('.top_quick .tel').css({color:'#fff', borderColor:'#fff'});
	// 		$('.header').css('background','transparent');
	// 		$('#gnb > li a').css('color','#fff');
	// 	});
	// }

	if(gid != 0) {
		$("#gnb li:nth-child(" + gid + ")").addClass("currentGnbs"); // 현재 페이지 효과 추가
		$("#snb li:nth-child(" + gid + ") ul li:nth-child(" + sid + ")").addClass("currentGnbs");
		// $("#snb li:nth-child(" + gid + ") ul li:nth-child(" + sid + ") a").css({"color":"#004f97", "font-weight":"800"}); // 현재 페이지 효과 추가
	}

	$("#gnb li").mouseover(function(){ // 대메뉴에 커서 대면
		if(gid != 0) {
			$("#gnb li:nth-child(" + gid + ")").addClass("currentGnbs");
			$("#gnb li").not("#gnb li:nth-child(" + gid + ")").removeClass("currentGnbs");

			$("#snb li:nth-child(" + gid + ") ul").addClass("currentGnbs");
			$("#snb li").not("#snb li:nth-child(" + gid + ") ul").removeClass("currentGnbs");
		} else {
			$("#gnb li").removeClass("currentGnb"); // 다른 버튼에 들어가있던 현재 페이지 효과 다 빼고
			$("#snb li ul").removeClass("currentGnbs");
		}
		var seq = $("#gnb > li").index(this) + 1; // 현재 마우스오버하고 있는 메뉴 버튼의 인덱스를 매겨서
		$("#gnb li:nth-child(" + seq + ")").addClass(""); // 현재 페이지 효과 추가
		$("#snb li:nth-child(" + seq + ") ul").addClass("currentGnbs");

		$("#gnb").addClass("header_black");
		});

	$("#snb li").mouseover(function(){ // 서브메뉴에 커서 대면
		if(gid != 0) {
			$("#gnb li:nth-child(" + gid + ")").addClass("currentGnb");
			$("#gnb li").not("#gnb li:nth-child(" + gid + ")").removeClass("currentGnb");

			$("#snb li:nth-child(" + gid + ") ul").addClass("currentGnbs");
			$("#snb li").not("#snb li:nth-child(" + gid + ") ul").removeClass("currentGnbs");
		} else {
			$("#gnb li").removeClass("currentGnb"); // 다른 버튼에 들어가있던 현재 페이지 효과 다 빼고
			$("#snb li ul").removeClass("currentGnbs");
		}
		var seq = $("#snb > li").index(this) + 1; // 현재 마우스오버하고 있는 메뉴 버튼의 인덱스를 매겨서
		$("#gnb li:nth-child(" + seq + ")").addClass("currentGnb"); // 현재 페이지 효과 추가
		$("#snb li:nth-child(" + seq + ") ul").addClass("currentGnbs");

		$("#gnb").addClass("header_black");
	});

	$(".headerWrap").mouseleave(function(){
		$("footer").css({"z-index":"999"});
		if(gid != 0) {
			$("#gnb li:nth-child(" + gid + ")").addClass("currentGnb");
			$("#gnb li").not("#gnb li:nth-child(" + gid + ")").removeClass("currentGnb");

			$("#snb li:nth-child(" + gid + ") ul").addClass("currentGnbs");
			$("#snb li").not("#snb li:nth-child(" + gid + ") ul").removeClass("currentGnbs");
		} else {
			$("#gnb li").removeClass("currentGnb"); // 다른 버튼에 들어가있던 현재 페이지 효과 다 빼고
			$("#snb li ul").removeClass("currentGnbs");

			$("#gnb").removeClass("header_black");
		}
		closeMenu();
	});
});

function closeMenu(){
	$(".snbWrap").slideUp("fast", function(){
		$(".gnbBg").fadeOut(300);
		$(".headerWrap > *").clearQueue();
	});
}

function gnbStyleOnTop(scrolling){
	$('.headerWrap').removeClass('sticky');

	// if(scrolling == true){
	// 	$('.headerWrap .logo img').attr("src","http://logosimg.cafe24.com/ossg/image/common/logo1.png");
	// 	$('.tel img').attr("src","http://logosimg.cafe24.com/ossg/image/common/tel.png");
	// } else {
	// 	$('.headerWrap .logo img').fadeOut(100, function(){
	// 			$(this).attr("src","http://logosimg.cafe24.com/ossg/image/common/logo1.png").fadeIn(100);
	// 	});
	// 	$('.tel img').fadeOut(100, function(){
	// 			$(this).attr("src","http://logosimg.cafe24.com/ossg/image/common/tel.png").fadeIn(100);
	// 	});
	// }

	// if (gid == "0") {
	// 	$('.snbWrap').removeClass('scroll_style');
	// } else {
	// 	$('.snbWrap').removeClass('scroll_style');
	// }

	// $('#gnb > li > a').css({
	// 	color: "#434343"
	// });
}

function gnbStyleOnScroll(scrolling){
	$('.headerWrap').addClass('sticky');

	// if(scrolling == true){
	// 	$('.headerWrap .logo img').attr("src","http://logosimg.cafe24.com/ossg/image/common/logo2.png");
	// 	$('.tel img').attr("src","http://logosimg.cafe24.com/ossg/image/common/tel2.png");
	// } else {
	// 	$('.headerWrap .logo img').fadeOut(100, function(){
	// 			$(this).attr("src","http://logosimg.cafe24.com/ossg/image/common/logo2.png").fadeIn(100);
	// 	});
	// 	$('.tel img').fadeOut(100, function(){
	// 			$(this).attr("src","http://logosimg.cafe24.com/ossg/image/common/tel2.png").fadeIn(100);
	// 	});
	// }

	// if (gid == "0") {
	// 	$('.snbWrap').addClass('scroll_style');
	// } else {
	// 	$('.snbWrap').removeClass('scroll_style');
	// }

	// $('#gnb > li > a').css({
	// 	color: "#434343"
	// });
}

$(window).load(function() {
	$('.headerWrap').hover(
		function() {
			gnbStyleOnScroll(true);
		},
		function() {
			if($(window).scrollTop() == 0) {
				if (gid == "0") {
					gnbStyleOnTop(true);
				} else {
					gnbStyleOnScroll(true);
				}
			}
		}
	);

	if (gid != "0") gnbStyleOnScroll(true);
});

$(window).scroll(function(){
	/* 서브메뉴 상에서 마우스 스크롤할때 fixed 속성때문에 서브메뉴가 따라 내려오는것을 방지 */
	var onTop = $(window).scrollTop();

	if(onTop!=0){
		//$(".snbWrap").hide(); // 스크롤 후 빠르게 메뉴에 커서를 대면 서브메뉴가 나오지 않음.
	}

	if($(window).scrollTop() == 0){
		if (gid == "0") {
			gnbStyleOnTop(true);
		} else {
			gnbStyleOnScroll(true);
		}
	} else {
		gnbStyleOnScroll(true);
	}
});
/* gnb end */
