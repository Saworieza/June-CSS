/*
Author: Matt Ward
Version: 1.04
*/

var popupOverrideActive = false 

var popupExpires = new Date();
popupExpires.setDate(popupExpires.getDate()+30);

jQuery(document).ready(function(){
	jQuery("#topmenu li ul").css('height','0px');
	jQuery("#topmenu li ul").toggleClass('level1');
	jQuery("#topmenu li ul li ul").toggleClass('level1').toggleClass('level2');
	jQuery("#topmenu li").hover(function(){
		jQuery(this).find('.level1').css('height','auto');
		jQuery(this).find('.level1').slideDown(300);
	},function(){
		jQuery(this).find('.level1').slideUp(10);
		jQuery(this).find('.level1').css('height','0px');
	});

	jQuery("#topmenu li ul li").hover(function(){
		jQuery(this).find('.level2').css('height','auto');
		jQuery(this).find('.level2').slideDown();
	},function(){
		jQuery(this).find('.level2').slideUp();
		jQuery(this).find('.level2').css('height','0px');
	});
		    jQuery("#mobilemenu select").change(function() {
        		window.location = jQuery("#mobilemenu select option:selected").val();
		    })
		    jQuery("#topTab").click(function(){
  				jQuery('html,body').animate({ scrollTop: (jQuery('#topBar').offset().top-25) }, { duration: 700, easing: 'swing' }); 
  			});

	var winWidth = jQuery(window).width();
	if (jQuery("#inline_content").length > 0 && winWidth > 580){
		var showCookie = false;
		if(popupOverrideActive){
	    	if (document.cookie.indexOf('ovisit=true') === -1) {
	    		showCookie = true;
				document.cookie = "ovisit=true; path=/; expires="+popupExpires.toUTCString();
			}
		}		
		else{
	    	if (document.cookie.indexOf('visited=true') === -1) {
	    		showCookie = true;
				document.cookie = "visited=true; path=/; expires="+popupExpires.toUTCString();
			}
		}
		if(showCookie){
			//Fetch the data

			jQuery.ajax({
			  url: contenturl,
			  cache: false
			}).done(function( html ) {
				jQuery("#inline_content").html(html);
				window.setTimeout(function(){
					boxWidth = "700px";
					if(winWidth < 1008 && winWidth > 768){
						boxWidth = "600px";
					}
					else if(winWidth < 768 && winWidth > 340 ){
						boxWidth = "90%";
					}
					jQuery.colorbox({inline:true, width:boxWidth, href:"#inline_content"});
				}, 2000, true);
			});


		}
	}
	
});

jQuery(function() {

    jQuery("#submit").hide();

    jQuery("#page-changer select").change(function() {
        window.location = $("#page-changer select option:selected").val();
    });
    


});




















