$(window).load(function(){

	setInterval(function(){
		var roundNum=ZZH.roundNum(0,4);
		$(".bg-image li").eq(roundNum).addClass("show").siblings().removeClass("show");
		},5000

	);

	var top1 = $("#section1").offset().top-70;
	var top2 = $("#section2").offset().top-70;

	
	$(".more").click(function(){
		$(".hidden-nav").slideToggle();
	})

	$(".hidden-nav a").click(function(){
		$(".hidden-nav").fadeOut();
	})

	$(window).scroll(function(){
		var s = $(window).scrollTop();
		if(s<top1){
			$(".nav").removeClass("fix");
		}

		if(s>=top1 && s<top2) {
			$(".flex-nav li:eq(0)").addClass("active").siblings().removeClass("active");
			$(".hidden-nav li:eq(0)").addClass("active").siblings().removeClass("active");
			$(".nav").addClass("fix");
			$("#section1 .fade").addClass("fadeIn");
			$("#section1 hr").addClass("fadeIn1");
		}

		if(s>=top2 ) {
			$(".flex-nav li:eq(1)").addClass("active").siblings().removeClass("active");
			$(".hidden-nav li:eq(1)").addClass("active").siblings().removeClass("active");
			$("#section2 .fade").addClass("fadeIn");
			$("#section2 hr").addClass("fadeIn1");
		}

	})

	var imgNum = $(".banner .lunboimg img").size();
	var lunboimg = 0;
	for(var i=0;i<imgNum;i++){
		$(".banner ul").append("<li></li>");
	};
	$(".banner ul li").eq(0).addClass("on");



	var lunboAuto=setInterval(function(){
					lunboimg++;
					imgchange();
					},3000);

	$(".banner .lunboimg").hover(function(){
		clearInterval(lunboAuto);
		$(".banner .lunboimg img").addClass("enlarge");},function(){
		$(".banner .lunboimg img").removeClass("enlarge");
		lunboAuto=setInterval(function(){
					lunboimg++;
					imgchange();
					},3000);
	})

	





	

	function imgchange(){
		$(".banner .lunboimg img").eq(lunboimg).addClass("appear").siblings().removeClass("appear");
		$(".banner .lunbobottom li").eq(lunboimg).addClass("on").siblings().removeClass("on");
		if(lunboimg==(imgNum-1)) lunboimg=-1;
	}

})