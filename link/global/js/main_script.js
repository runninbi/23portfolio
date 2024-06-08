$(document).ready(function(){
	$("#fullpage").fullpage({
		menu: '#gnb', //current 페이지를 알 수 있다
		anchors:['page0','page1','page2','page3','page4'],
		sectionsColor: ['#fff','#f9f9f9','#fff','#fff','#f4f0fe'], //색상 옵션. 섹션의 색상. 영상 박은 섹션에는 색을 지운다
		navigation: true, //bullet 유무
		autoScrolling: true, //wheel 유무
		scrollBar: false, // true일 때 스크롤이 생김 = aos 를 쓸 수 있음..!
		navigationPosition: 'left',
		navigationTooltips: ['이벤트','카드','금융','디지털','공지'],
		showActiveTooltip: true, //툴팁 show 여부
		loopBottom: false, //마지막 땅 치고 다시 위로 스르륵 올라가기
		responsiveWidth:1025, /*1024도 full js면 976으로 설정*/
		onLeave: function(origin, destination, direction){
			if(origin.index==0){
				$(".nav").addClass("add_fixed");
				$("header").css("height","auto");
				$(".bottom_header").css("display","none");
				$(".top_header").css("display","none");
			}
		},
		afterLoad: function(origin, destination, direction){
			if(destination.index==0){
				$(".nav").removeClass("add_fixed");
				$("header").css("height","135px");
				$(".bottom_header").css("display","block");
				$(".top_header").css("display","block");
			}
		},
	});

	//topBtn
	$("#topBtn").click(function(){
		fullpage_api.moveTo("page0");
	});
	$(".slider").slick({
		dots:true,
		arrows:false,
		slidesToShow:2,
	});

	//mycar
	$(".mycarbox").click(function(){
		if($(".mycarslide").css("display")=="none"){
			$(".mycarslide").slideDown();
			$(".mycarbox p.arrowdown").css("display","none");
			$(".mycarbox p.arrowup").css("display","block");
		}else{
			$(".mycarslide").slideUp();
			$(".mycarbox p.arrowdown").css("display","block");
			$(".mycarbox p.arrowup").css("display","none");
		}
	});

	//title
	$(".selected_cg").click(function(){
		if($(".unselected_cg").css("display")=="none"){
			$(".unselected_cg").slideDown();
			$(".selected_cg p.arrowdown").css("display","none");
			$(".selected_cg p.arrowup").css("display","block");
		}else{
			$(".unselected_cg").slideUp();
			$(".selected_cg p.arrowdown").css("display","block");
			$(".selected_cg p.arrowup").css("display","none");
		}
	});

	//event_slider
	$(".event_slider").slick({
		autoplay:true,
		infinite: true,
		slidesToShow:1,
		dots:true,
		arrows:false,
		speed:500,
		prevArrow:$("#BtnPrev"),
		nextArrow:$("#BtnNext"),
		focusOnSelect:false,
		responsive: [
		{
			breakpoint: 1025,
			settings: {
				dots:false,
				arrows:true,
			}
		},
		]
	});

	//card_tab_slider
	$(".tab_content").hide();
		$(".tab_content:first").show();
		$("ul.tabs li").click(function(){
			$("ul.tabs li").removeClass("cardtab_active");
			$(this).addClass("cardtab_active");
			$(".tab_content").hide();
			var activeTab = $(this).attr("rel");
			$("#"+activeTab).show();
		});

	//card_slider
	$(".card_slider").slick({
		fade:true,
		autoplay:false,
		infinite: true,
		slidesToShow:1,
		dots:false,
		arrows:false,
		speed:500,
		prevArrow:$("#BtnPrev1"),
		nextArrow:$("#BtnNext1"),
		focusOnSelect:false,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					fade:false,
					arrows:true,
				}
			},
			]
	});

	//cardsum_slider
	$(".cardsum_slider").slick({
		autoplay:false,
		infinite: true,
		slidesToShow:3,
		centerMode:true,
		centerPadding:'50px',
		dots:false,
		arrows:false,
		speed:500,
		focusOnSelect:true,
		asNavFor:'.card_slider',
		prevArrow:$("#BtnPrev2"),
		nextArrow:$("#BtnNext2"),
		responsive: [
			{
				breakpoint: 769,
				settings: {
					arrows:true,
				}
			},
			{
				breakpoint: 581,
				settings: {
					arrows:true,
					slidesToShow:1,
				}
			},
		]
	});

	//finance_slider
	$(".finance_img_slider").slick({
		autoplay:false,
		infinite: true,
		slidesToShow:2,
		dots:false,
		arrows:false,
		speed:500,
		focusOnSelect:true,
	});
    

	//con_list_slider
	$(".con_list_slider").slick({
		autoplay:true,
		infinite: true,
		slidesToShow:3,
		dots:false,
		arrows:false,
		speed:500,
		focusOnSelect:true,
		variableWidth: true,
		responsive: [
		{
			breakpoint: 1581,
			settings: {
				variableWidth: false,
			}
		},
		{
			breakpoint: 1025,
			settings: {
				variableWidth: false,
			    slidesToShow:3,
				centerMode: true,
                centerPadding: '30px',
			}
		},
		{
			breakpoint: 641,
			settings: {
				variableWidth: false,
			    slidesToShow:1,
				centerMode: true,
                centerPadding: '130px',
			}
		},
		{
			breakpoint: 481,
			settings: {
				variableWidth: false,
				slidesToShow:1,
				centerMode: true,
				centerPadding: '30px',
			}
		},
		
		]
	});

	//card_tab
	$(".section .inner .card .inner_card .card_tab .tabs li").click(function(){
		$(".section .inner .card .inner_card .card_tab .tabs li").removeClass("active");
		$(this).addClass("active");
	});	

	//notice_tab
	$(".ntab_content").hide();
	$(".ntab_content:first").show();
	$("ul.notice_tabs li").click(function(){
		$("ul.notice_tabs li").removeClass("maintab_active");
		$(this).addClass("maintab_active");
		$(".ntab_content").hide();
		var activeTab = $(this).attr("rel");
		$("#"+activeTab).fadeIn();
	});

	//family site
	$(".fs_tit").click(function(){
		if($(".fs_con").css("display")=="none"){
			$(".fs_con").slideDown();
			$(".fs_tit p.arrowdown").css("display","none");
			$(".fs_tit p.arrowup").css("display","block");
		}else{
			$(".fs_con").slideUp();
			$(".fs_tit p.arrowdown").css("display","block");
			$(".fs_tit p.arrowup").css("display","none");
		}
	});
	//topbtn
	$(".topBtn").click(function(){
		fullpage_api.moveTo("page0");
	});

	/*******************  sub2 : benefit *******************/

	//play_event_slider
	$(".play_event_slider").slick({
		autoplay:true,
		infinite:true,
		slidesToShow:3,
		dots:false,
		arrows:true,
		prevArrow:$("#BtnPrev"),
		nextArrow:$("#BtnNext"),
		speed:600,
		pauseOnFocus:false,
		pauseOnHover:false,
		responsive:[
			{
				breakpoint: 1301,
				settings: {
					slidesToShow:2,
				}
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow:1,
				}
			},
		]
	});


	/*******************  sub4 : finance *******************/

	//finance_service_slider
	$(".finance_service_slider").slick({
		autoplay:true,
		infinite:true,
		slidesToShow:3,
		dots:false,
		arrows:true,
		speed:500,
		prevArrow:$("#BtnPrev"),
		nextArrow:$("#BtnNext"),
		focusOnSelect:false,
		variableWidth:false,
		responsive:[
			{
				breakpoint: 1301,
				settings: {
					slidesToShow:2,
				}
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow:1,
				}
			},
		]
	});
	

	/*******************  sub6 : card *******************/

	//new_cards_slider
	$(".new_cards_slider").slick({
		autoplay:true,
		infinite:true,
		slidesToShow:1,
		dots:false,
		arrows:true,
		prevArrow:$("#BtnPrev"),
		nextArrow:$("#BtnNext"),
		speed:900,
		pauseOnFocus:false,
		pauseOnHover:false,
	});


	/*******************  sub7 : service *******************/
	
	//primary_service_slider
	$(".primary_service_slider").slick({
		autoplay:true,
		infinite:true,
		slidesToShow:3,
		dots:false,
		arrows:true,
		prevArrow:$("#BtnPrev1"),
		nextArrow:$("#BtnNext1"),
		speed:900,
		pauseOnFocus:false,
		pauseOnHover:false,
		responsive:[
			{
				breakpoint: 1301,
				settings: {
					slidesToShow:2,
				}
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow:1,
				}
			},
		]
	});

	//service_life_slider
	$(".service_life_slider").slick({
		autoplay:true,
		infinite:true,
		slidesToShow:4,
		dots:false,
		arrows:true,
		prevArrow:$("#BtnPrev2"),
		nextArrow:$("#BtnNext2"),
		speed:900,
		pauseOnFocus:false,
		pauseOnHover:false,
		responsive:[
			{
				breakpoint: 1301,
				settings: {
					slidesToShow:3,
				}
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow:1,
				}
			},
		]
	});

	
	/*******************  sub8 : digital *******************/

	//sub_digital_slider
	$(".sub_digital_slider").slick({
		autoplay:false,
		infinite:true,
		slidesToShow:1,
		dots:false,
		arrows:true,
		prevArrow:$("#BtnPrev"),
		nextArrow:$("#BtnNext"),
		speed:900,
		pauseOnFocus:false,
		pauseOnHover:false,
	});
	

	/*******************  sub10 : notice *******************/

	//notice_tab
	$(".notice_tab_content").hide();
		$(".notice_tab_content:first").show();
		$("ul.notice_tabs li").click(function(){
			$("ul.notice_tabs li").removeClass("tab_active");
			$(this).addClass("tab_active");
			$(".notice_tab_content").hide();
			var activeTab = $(this).attr("rel");
			$("#"+activeTab).show();
		});

	//page_tab
	$(".pages ul li").click(function(){
			$(".pages ul li").removeClass("page_active");
			$(this).addClass("page_active");
		});	


	/*******************  sub11 : qna *******************/

	//qna_tab_slider
	$(".qna_tab_slider").slick({
		autoplay:false,
		infinite:false,
		slidesToShow:4,
		dots:false,
		arrows:true,
		prevArrow:$("#BtnPrev"),
		nextArrow:$("#BtnNext"),
		speed:900,
		pauseOnFocus:false,
		pauseOnHover:false,
		responsive:[
			{
				breakpoint: 1301,
				settings: {
					slidesToShow:3,
				}
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow:3,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow:2,
				}
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow:1,
				}
			},
		]
	});

	$(".qna_tab_slider .items .items_content").click(function(){
		$(".qna_tab_slider .items .items_content").removeClass("tab_active");
		$(this).addClass("tab_active");
	});	
});
