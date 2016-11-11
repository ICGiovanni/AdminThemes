$(function() {
		$("#header_currancy").hover(function() {
			$(this).addClass('active');
			$(".currency_detial").stop(true, true).delay(300).slideDown(500, "easeOutBounce");
			},  
			function() {
			$(".currency_detial").stop(true, true).delay(300).fadeOut(100, "easeInCubic");
		});
		$(".cart-block").hover(function() {
			$(this).addClass('active');
			$("#minicart").stop(true, true).delay(300).slideDown(500, "easeOutBounce");
			},  
			function() {
			$("#minicart").stop(true, true).delay(300).fadeOut(100, "easeInCubic");
		});
});
$(document).ready(function(){
		ddsmoothmenu.init({
		mainmenuid: "smoothmenu1", //menu DIV id
		orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
		classname: 'ddsmoothmenu', //class added to menu's outer DIV
		//customtheme: ["#1c5a80", "#18374a"],
		contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
	});
	$('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
	  jQuery('#mix').jcarousel({
			scroll: 1,
			easing: 'swing',
			animation: 750,
			visible: 0,
			auto: 0
		});	
		$("<select />").appendTo("#nav");
	$("<option />", {
	"selected": "selected",
	"value"   : "",
	"text"    : "Menu"
	}).appendTo("#nav select");
	$("#nav a").each(function() {
	var el = $(this);
	$("<option />", {
	"value"   : el.attr("href"),
	"text"    : el.text()
	}).appendTo("#nav select");
	});
	
	$("#nav select").change(function() {
	window.location = $(this).find("option:selected").val();
});
});
