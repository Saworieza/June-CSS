jQuery(document).ready(function(){

	// 2ndTuesday Registration script
	jQuery("#subscribeButton").click(function( event ){
	  event.preventDefault();
	  
	  // A couple quick validation checks
	  eMsg = "";
	  
	  // If no email address
	  if(jQuery("input[name=email]").val() === ""){
	  	eMsg = "Before we can subscribe you, we really do need your email address! Please enter your email address and try again."
	  }
	  else if(jQuery("input[name=fname]").val() === ""){
	  	eMsg = "Would you mind supplying your first name so that we can address the email specifically to you? Thanks!"
	  }
	  // If invalid email address (uses a really simply structural RegEx
	  else if(! validateEmail(jQuery("input[name=email]").val())){
	  	eMsg = "Something doesn't look quite right. Please check the structure of your email address and try again. Thanks!"
	  }
	  if(eMsg == ""){
		jQuery("#subscribeButton").html('Subscribing…');
		var str = jQuery("#subscribeFrom").serialize();
		jQuery.ajax({
			type: "POST",
			url: subscribeurl,
			data: str,
			error: function(XMLHttpRequest, textStatus, errorThrown){
    	  		alert('error ' + errorThrown);
      		},
			success: function(msg){	
					if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
					{
						jQuery("#subscribeMsg").html("And, we're done! Thanks for subscribing. You should receive a confirmation email at the address you provided, so be sure to confirm your subscription to start receiving the 2ndTuesday newsletter!").fadeIn();
						jQuery("#subscribeFrom").fadeOut();
					}
					else
						jQuery("#subscribeError span").html(msg);
					    jQuery("#subscribeError").fadeIn();
						jQuery("#subscribeButton").html('Sign Up Now &raquo;');
					{
					}
			}
		});
	  }
	  else{
	     jQuery("#subscribeError span").html(eMsg)
	     jQuery("#subscribeError").fadeIn();
		 jQuery("#subscribeButton").html('Sign Up Now &raquo;');

	  }
	});
	
	jQuery("#errorDismiss").click(function(){
		jQuery("#subscribeError").fadeOut();
	})
 
});

function validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}