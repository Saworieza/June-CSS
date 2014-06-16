jQuery(document).ready(function() {
	
	jQuery('#main-menu .menu').mobileMenu({
			defaultText: 'Navigate to...',					//default text for select menu
			className: 'select-menu',						//class name
			subMenuDash: '&nbsp;&nbsp;&nbsp;&ndash;'		//submenu separator
	});
	
	jQuery('#main-menu ul.menu').superfish({				// main menu settings
		hoverClass:  'over', 								// the class applied to hovered list items 
		delay:       100,                            		// one second delay on mouseout 
		animation:   {opacity:'show',height:'show'},  		// fade-in and slide-down animation 
		speed:       150,                          			// faster animation speed 
		autoArrows:  false,                           		// disable generation of arrow mark-up 
		dropShadows: true,                            		// disable drop shadows 
		delay       : 0		
	});	

var stickyNavTopW = jQuery('#text-8').offset().top + jQuery('#text-8').parent().offset().top + jQuery('#text-8').parent().parent().offset().top + jQuery('#text-8').parent().parent().parent().offset().top + 300;
//var stickyNavTopW = jQuery('#text-7').offset().top + jQuery('#text-7').parent().offset().top + jQuery('#text-7').parent().parent().offset().top + jQuery('#text-7').parent().parent().parent().offset().top;
var stickyNavTopM = jQuery('#main-menu').offset().top;
var stickyNav = function(){
  var scrollTop = jQuery(window).scrollTop();  
  if (scrollTop > stickyNavTopW) {   
    jQuery('#text-8').addClass('w-fixed');  
  } else {  
    jQuery('#text-8').removeClass('w-fixed');   
  }

  if (scrollTop > stickyNavTopM) {   
    jQuery('#main-menu').addClass('f-nav');  
  } else {  
    jQuery('#main-menu').removeClass('f-nav');   
  }
};  

stickyNav();  
jQuery(window).scroll(function() {  
  stickyNav();  
});  

    /*
	jQuery(".sidebar-carousel-posts").jCarouselLite({		//carousel settings
			visible: 1,										// visible items
			auto: 5000,										// carousel speed
			btnNext: ".wid-next",							// next button class
			btnPrev: ".wid-prev"							// previous button class
   	});
	
	jQuery('.fb-posts-list').flexslider({					// sliding settings for featured category 1
			animation: "slide",								// animation style
			slideshow: true,								// disable automatic sliding
			directionNav: false,  							// enable nav arrows
			controlsContainer: ".fb-posts-nav",  			// nav arrows container.
			controlNav: true,   							// disable navigation paging.
			smoothHeight: false,							// animate the container height smoothly
			animationSpeed: 800								// speed of animations in milliseconds
	});
	
	jQuery('.recent-tweets-list').flexslider({				// sliding settings for featured category 1
			animation: "slide",								// animation style
			slideshow: true,								// disable automatic sliding
			directionNav: false,  							// enable nav arrows
			controlsContainer: ".recent-tweets-nav",  		// nav arrows container.
			controlNav: true,   							// disable navigation paging.
			smoothHeight: false,							// animate the container height smoothly
			animationSpeed: 800								// speed of animations in milliseconds
	});
	
	jQuery('#wt-slider').flexslider({						// slider settings
			animation: "slide",								// animation style
			controlNav: false,								// slider thumnails class
			slideshow: true,								// enable automatic sliding
			directionNav: true,								// disable nav arrows
			slideshowSpeed: 3000,   							// slider speed
			smoothHeight: false,
			controlsContainer: "#wt-slider .slider-nav",
	});	
	
	jQuery('.slide-cat1').flexslider({						// sliding settings for featured category 1
			animation: "slide",								// animation style
			slideshow: false,								// disable automatic sliding
			directionNav: false,  							// enable nav arrows
			controlsContainer: "#slide-cat1-nav",  			// nav arrows container.
			controlNav: true,   							// disable navigation paging.
			smoothHeight: true,								// animate the container height smoothly
			animationSpeed: 800								// speed of animations in milliseconds
	});
	
	jQuery('.slide-cat2').flexslider({						// sliding settings for featured category 1
			animation: "slide",								// animation style
			slideshow: false,								// disable automatic sliding
			directionNav: false,  							// enable nav arrows
			controlsContainer: "#slide-cat2-nav",  			// nav arrows container.
			controlNav: true,   							// disable navigation paging.
			smoothHeight: true,								// animate the container height smoothly
			animationSpeed: 800								// speed of animations in milliseconds
	});
	
	jQuery('.slide-cat3').flexslider({						// sliding settings for featured category 1
			animation: "slide",								// animation style
			slideshow: false,								// disable automatic sliding
			directionNav: false,  							// enable nav arrows
			controlsContainer: "#slide-cat3-nav",  			// nav arrows container.
			controlNav: true,   							// disable navigation paging.
			smoothHeight: true,								// animate the container height smoothly
			animationSpeed: 800								// speed of animations in milliseconds
	});
	
	jQuery('.slide-cat4').flexslider({						// sliding settings for featured category 1
			animation: "slide",								// animation style
			slideshow: false,								// disable automatic sliding
			directionNav: false,  							// enable nav arrows
			controlsContainer: "#slide-cat4-nav",  			// nav arrows container.
			controlNav: true,   							// disable navigation paging.
			smoothHeight: true,								// animate the container height smoothly
			animationSpeed: 800								// speed of animations in milliseconds
	});
	
	jQuery('.slide-cat5').flexslider({						// sliding settings for featured category 1
			animation: "slide",								// animation style
			slideshow: false,								// disable automatic sliding
			directionNav: false,  							// enable nav arrows
			controlsContainer: "#slide-cat5-nav",  			// nav arrows container.
			controlNav: true,   							// disable navigation paging.
			smoothHeight: true,								// animate the container height smoothly
			animationSpeed: 800								// speed of animations in milliseconds
	});
	
		
	jQuery(".live-tile, .flip-list").not(".exclude").liveTile();
    
	jQuery(".widget_video iframe").each(function(){
      var ifr_source = jQuery(this).attr('src');
      var wmode = "wmode=transparent";
      if(ifr_source.indexOf('?') != -1) jQuery(this).attr('src',ifr_source+'&'+wmode);
      else jQuery(this).attr('src',ifr_source+'?'+wmode);
	});	
	*/
});