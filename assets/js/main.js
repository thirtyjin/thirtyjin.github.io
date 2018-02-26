
( function( $ ) {
$(document).ready(function(){
	$("#openSideNav").click(function(){
	  $("body").addClass("blur-on");
		$("body").removeClass("blur-off");
		$("#myModal").css({"display":"block"});
		$(".sidenav").css({"left":"0px","visibility":"visible","transform":"translateX(0px)"});
	});

	$(".closebtn, .blur_modal").click(function(){
	  $("body").addClass("blur-off");
		$("body").removeClass("blur-on");
		$("#myModal").css({"display":"none"})
		$(".sidenav").css({"left":"-250px","visibility":"hidden","transform":"translateX(-250px)"});
	});
});
} )( jQuery );
