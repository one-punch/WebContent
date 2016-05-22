// JavaScript Document
$(function(){
	$(".xxx").click(function(){
		$(".header_banner").slideUp()
		})
	})





	 
	 
	 
$(function(){
	$(".lunbo img").hide();
	$(".lunbo img").eq(0).show();
	$(".lunbo_2 div").removeClass("lunbo_4");
	$(".lunbo_2 div").eq(0).addClass("lunbo_4"); 
	var n = 0;
	function change(){
		if(n>3){
			n = 0;	
		}else{
			n=n+1;	
		}
		$(".lunbo img").hide();
		$(".lunbo img").eq(n).show();
		$(".lunbo_2 div").removeClass("lunbo_4");
		$(".lunbo_2 div").eq(n).addClass("lunbo_4")	
	}
	var timer=setInterval(change,2000)
	$(".lunbo").hover(function(){
			clearInterval(timer);
		},function(){
			timer=setInterval(change,2000)
	})	
	$(".left").click(function(){
		if(n<0){
			n = 4-1;	
		}else{
			n = n-1;	
		}
		$(".lunbo img").hide();
		$(".lunbo img").eq(n).show();
		$(".lunbo_2 div").removeClass("lunbo_4");
		$(".lunbo_2 div").eq(n).addClass("lunbo_4")	
	})
	$(".right").click(function(){
		if(n>4-1){
			n = 0;	
		}else{
			n = n+1;	
		}
		$(".lunbo img").hide();
		$(".lunbo img").eq(n).show();
		$(".lunbo_2 div").removeClass("lunbo_4");
		$(".lunbo_2 div").eq(n).addClass("lunbo_4")	
	})
	$(".lunbo_2 div").hover(function(){
		$(".lunbo_2 div").removeClass("lunbo_4");
		$(this).addClass("lunbo_4")
		n = $(".lunbo_2 div").index(this);
		$(".lunbo img").hide();
		$(".lunbo img").eq(n).show();		
	})
})	 
	 
	 
	 
	 
	 
	 
	 
	 
	
	





$(function(){
	$(".nav_list_one h4").eq(0).css({
		    "background-image":"url(images/nav_1.jpg)",
			"background-position":"left center",
			"background-repeat":"no-repeat",
	    })
	})	
$(function(){
	$(".nav_list_one h4").eq(1).css({
		    "background-image":"url(images/nav_2.jpg)",
			"background-position":"left center",
			"background-repeat":"no-repeat",
	    })
	})
$(function(){
	$(".nav_list_one h4").eq(2).css({
		    "background-image":"url(images/nav_3.jpg)",
			"background-position":"left center",
			"background-repeat":"no-repeat",
	    })
	})
$(function(){
	$(".nav_list_one h4").eq(3).css({
		    "background-image":"url(images/nav_4.jpg)",
			"background-position":"left center",
			"background-repeat":"no-repeat"
	    })
	})
$(function(){
	$(".nav_list_one h4").eq(4).css({
		    "background-image":"url(images/nav_5.jpg)",
			"background-position":"left center",
			"background-repeat":"no-repeat"
	    })
	})
$(function(){
	$(".nav_list_one h4").eq(5).css({
		    "background-image":"url(images/nav_6.jpg)",
			"background-position":"left center",
			"background-repeat":"no-repeat",
			"padding-left":"24px",
			"margin-left":"16px"

	    })
	})
$(function(){
	$(".nav_list_one h4").eq(6).css({
		    "background-image":"url(images/nav_7.jpg)",
			"background-position":"left center",
			"background-repeat":"no-repeat"
	    })
	})
$(function(){
	$(".nav_list_one h4").eq(7).css({
		    "background-image":"url(images/nav_8.jpg)",
			"background-position":"left center",
			"background-repeat":"no-repeat"
	    })
	})
$(function(){
	$(".nav_list_one h4").eq(8).css({
		    "background-image":"url(images/nav_9.jpg)",
			"background-position":"left center",
			"background-repeat":"no-repeat"
	    })
	})								
	






	
/****************************************************************************商品轮播*/	
$(function(){
	function changeImg(){
		$(".XK").stop().animate({left:-800},1000,function(){
		$(".XK").css({left:-400})
		$(".XK ul:first").insertAfter(".XK ul:last")
	})
	}
	var timer = setInterval(changeImg,2000);
	$(".DK,.zuo,.you").hover(function(){
		clearInterval(timer);	
	},function(){
		timer = setInterval(changeImg,2000)
	    })
	$(".zuo").click(function(){
		$(".XK").stop().animate({left:-800},300,function(){
				$(".XK").css({left:-400})
				$(".XK ul:first").insertAfter(".XK ul:last")
			})
	})
	$(".you").click(function(){
		$(".XK").stop().animate({left:0},300,function(){
				$(".XK").css({left:-400})
				$(".XK ul:last").insertBefore(".XK ul:first")
			})
	})
})	
	
	







$(function(){
	$(".lou_nav").eq(0).children("h5").css({
		    "background-image":"url(images/lou_nav_1.png)",
			"background-position":"0 6px"
	    })
	})
$(function(){
	$(".lou_nav").eq(1).children("h5").css({
		    "background-image":"url(images/lou_nav_2.png",
			"background-position":"0 12px",
			"padding-left":"46px"
	    })
	})
$(function(){
	$(".lou_nav").eq(2).children("h5").css({
		    "background-image":"url(images/lou_nav_3.png",
			"background-position":"0 0",
			"padding-left":"57px"
	    })
	})
$(function(){
	$(".lou_nav").eq(3).children("h5").css({
		    "background-image":"url(images/lou_nav_4.png",
			"background-position":"0 8px",
			"padding-left":"57px"
	    })
	})				




$(function(){
	$(".Sale_two li").eq(2).css({
		    "border-bottom":"1px solid #e6e3df",
	    })
	})
$(function(){
	$(".Sale_two li").eq(3).css({
		    "border-bottom":"1px solid #e6e3df",
	    })
	})	














$(function(){
	$(".floor_1").hover(function(){
		$(this).children(".flooer_tm").filter(':not(:animated)').animate({"left":"305px"},600);
		},function(){
			$(this).children(".flooer_tm").css({"left":"-305px"});
			})
	})




$(function(){
	$(".guild_one:last").css({"border-right":"none"})
	})



	
	