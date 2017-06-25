$(document).ready(function() {
	
	var opened = false;

	// On hover
	$("a.product-link, section.product").hover( function() {
		$(".border").addClass("product");
		
		$("html").addClass("product-hover");
		
	}, function() {
			$(".border").removeClass("product");
			$("html").removeClass("product-hover");
	});
	
	// On click
	//$("a.product-link, section.product").click( function() {
	//	opened = true;
	//	$(".border").addClass("product");
	//});
	
	
	// On hover
	$("a.graphic-link, section.graphic").hover( function() {
		$(".border").addClass("graphic");
		$("html").addClass("graphic-hover");
		
	}, function() {
	//	if(!opened){
			$(".border").removeClass("graphic");
			$("html").removeClass("graphic-hover");

	//	}
	});
	
	// On click
	//$("a.graphic-link, section.graphic").click( function() {
	//	opened = true;
	//	$(".border").addClass("graphic");
	//});
	
	
	// Scroll to About
	
	$(".about-link").click(function (){
		$.modal.close();
		
	    $('html, body').animate({
	        scrollTop: $("footer").offset().top
	    }, 1000);
	    preventDefault();
	});



	// Clickify paragraphs
	
	$("section.product p").click(function(){
		console.log("Product click");
		$("a#product-link").trigger("click");
		
	});
	
	$("section.graphic p").click(function(){
		$("a#graphic-link").trigger("click");
		
	});
	
	
	// Highlight relevant sections
	
	$("em.titles").hover(function(){
		$("aside#titles").addClass("selected");
		$(".blurb#titles1").addClass("selected");
	}, function() {
		$("aside#titles").removeClass("selected");
		$(".blurb#titles1").removeClass("selected");
	});
	
	$("em.places").hover(function(){
		$("aside#topnote").addClass("selected");
	}, function() {
		$("aside#topnote").removeClass("selected");
	});
	
	
	
	// Descriptions for funsies
	
	$("header ul li a, section").hover(function(){
		console.log("Hovered");
		var thetext = $(this).attr("alt");
		console.log(thetext);
		$("header span").html(thetext);
		
	}, function() {
		$("header span").html("---");
		
	});
	
	


	// Product -> FB Composer
	
	$(document).on("mouseover", '#fbcomposer', function(event) { 
		$(this).attr("src","work/fb/fbwork_composer_hover@2x.png");
		console.log("mouseover");
	});
	
	$(document).on("click", '#fbcomposer', function(event) { 
		$(this).attr("src","work/fb/fbwork_composer_clicked@2x.png");
		console.log("clicked");
	});
	
	$(document).on("mouseout", '#fbcomposer', function(event) { 
		$(this).attr("src","work/fb/fbwork_composer@2x.png");
		console.log("mouseout");
	});

	
	$.preloadImages = function() {
	  for (var i = 0; i < arguments.length; i++) {
	    $("<img />").attr("src", arguments[i]);
	  }
	}
	
	$.preloadImages("work/fb/fbwork_composer_hover@2x.png","work/fb/fbwork_composer_clicked@2x.png");
	


});