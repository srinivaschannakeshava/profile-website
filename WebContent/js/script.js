/**
 * http://usejsdoc.org/
 */
$(document).ready(function() {
	$(".navList li").hover(function() {
			$(this).addClass("lihoveractive");
	}, function() {
		$(this).removeClass("lihoveractive");
	})

	$("#profile_social a").hover(function() {
	 $(this).addClass("socialactive");
	}, function() {
		$(this).removeClass("socialactive");
	})
	
	$(".navList li").click(function() {
//		$(".dataContent").fadeOut();
//		$(".dataContent").fadeIn("slow");
	    $(this).addClass("liactive");
	    $(this).siblings().removeClass("liactive");
	});
	
})