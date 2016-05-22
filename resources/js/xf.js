// JavaScript Document

/*************************************************************************************************************************************************
********************************************************************悬浮*/
$(function(){
    // 监听滚动事件

    $(window).scroll(function(){
         // 获得div的高度

         var h = $("body").offset().top;
         if($(this).scrollTop()>h && $(this).scrollTop() > h+190){

            // 滚动到指定位置

            $(".xf_bac_img_left").show();

        } 
    });

})


$(function(){
    // 监听滚动事件

    $(window).scroll(function(){
         // 获得div的高度

         var h = $("body").offset().top;
         if($(this).scrollTop()>h && $(this).scrollTop() < h+190){

            // 滚动到指定位置

            
            $(".xf_bac_img_left").hide();
        }
    })

})














$(function(){
    // 监听滚动事件

    $(window).scroll(function(){
         // 获得div的高度

         var h = $("body").offset().top;
         if($(this).scrollTop()>h && $(this).scrollTop() > h+190){

            // 滚动到指定位置

            $(".xf_bac_img_right").show();

        } 
    });

})


$(function(){
    // 监听滚动事件

    $(window).scroll(function(){
         // 获得div的高度

         var h = $("body").offset().top;
         if($(this).scrollTop()>h && $(this).scrollTop() < h+190){

            // 滚动到指定位置

            
            $(".xf_bac_img_right").hide();
        }
    })

})













$(function(){
    // 监听滚动事件

    $(window).scroll(function(){
         // 获得div的高度

         var h = $("body").offset().top;
         if($(this).scrollTop()>h && $(this).scrollTop() > h+810){

            // 滚动到指定位置

            $(".xf_left_banner").fadeIn();

        } 
    });

})


$(function(){
    // 监听滚动事件

    $(window).scroll(function(){
         // 获得div的高度

         var h = $("body").offset().top;
         if($(this).scrollTop()>h && $(this).scrollTop() < h+810){

            // 滚动到指定位置

            
            $(".xf_left_banner").fadeOut();
        }
    })

})










$(function(){
	$(".xf_left_banner_x").click(function(){
		$(".xf_left_banner_x").hide()
		$(".xf_left_banner_img").hide()
		})
	})














$(function(){
    // 监听滚动事件

    $(window).scroll(function(){
         // 获得div的高度

         var h = $("body").offset().top;
         if($(this).scrollTop()>h && $(this).scrollTop() > h+810){

            // 滚动到指定位置

            $(".xf_right_qq").fadeIn();

        } 
    });

})


$(function(){
    // 监听滚动事件

    $(window).scroll(function(){
         // 获得div的高度

         var h = $("body").offset().top;
         if($(this).scrollTop()>h && $(this).scrollTop() < h+810){

            // 滚动到指定位置

            
            $(".xf_right_qq").fadeOut();
			
        }
    })

})


















$(function(){
    // 监听滚动事件

    $(window).scroll(function(){
         // 获得div的高度

         var h = $("body").offset().top;
         if($(this).scrollTop()>h && $(this).scrollTop() > h+2000){

            // 滚动到指定位置

            $(".bottom_go_top").show();

        } 
    });

})


$(function(){
    // 监听滚动事件

    $(window).scroll(function(){
         // 获得div的高度

         var h = $("body").offset().top;
         if($(this).scrollTop()>h && $(this).scrollTop() < h+2000){

            // 滚动到指定位置

            
            $(".bottom_go_top").hide();
			
        }
    })

})




$(function(){
  $(".bottom_go_top").click(function() {
	  $(".bottom_go_top").hide()
      $("html,body").animate({scrollTop:0}, 500);
  }); 
 })











/*$(window).scroll(function(){
     var sc=$(window).scrollTop();
	 var rwidth=$(window).width()
   $(".bottom_go_top").click(function(){
    var sc=$(window).scrollTop();
   $('body,html').animate({scrollTop:0},500);
   $(".bottom_go_top").hide()
    })
	 },function(){
		$(".bottom_go_top").unbind()
		}) */ 

















/*


$(function(){
    // 监听滚动事件

    $(window).scroll(function(){
         // 获得div的高度

         var h = $("body").offset().top;
         if($(this).scrollTop()>h && $(this).scrollTop() > h+158){

            // 滚动到指定位置

            $(".xf_bac_img").fadeIn();

        } 
    });

})


$(function(){
    // 监听滚动事件

    $(window).scroll(function(){
         // 获得div的高度

         var h = $("body").offset().top;
         if($(this).scrollTop()>h && $(this).scrollTop() < h+158){

            // 滚动到指定位置

            
            $(".xf_bac_img").fadeOut();
        }
    })

})



*/











