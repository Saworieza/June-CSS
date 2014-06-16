
Modernizr.addTest("boxsizing", function() {
	return Modernizr.testAllProps("boxSizing") && (document.documentMode === undefined || document.documentMode > 7);
});

(function($) {

$(function(){
	// Fix box-sizing (in IE7).
	if( !($('html').hasClass('boxsizing')) ){
		$("[class*='col-']").each(function(){
			var fullW = $(this).outerWidth(),
			    actualW = $(this).width(),
			    wDiff = fullW - actualW,
			    newW = actualW - wDiff;
		    $(this).css('width',newW);
		});
	}
});

})(jQuery);