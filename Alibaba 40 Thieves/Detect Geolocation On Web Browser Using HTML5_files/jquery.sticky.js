// Sticky Plugin
// =============
// Author: Anthony Garand
// Date: 2/14/2011
// Description: Makes an element on the page stick on the screen

(function($){
	$.fn.sticky = function(options) {
		var defaults = {
			topSpacing: 0,
			center: false
		};
		var options = $.extend(defaults, options);
		return this.each(function() {
			var topPadding = options.topSpacing,
			stickyElement = $(this),
			stickyElementHeight = stickyElement.outerHeight(),
			stickyElementWidth = stickyElement.outerWidth(),
			center = options.center,
			elementPosition = stickyElement.offset().top - $(window).scrollTop(),
			regPosition = stickyElement.offset().top,
			stickyId = stickyElement.attr("id");
			stickyElement.wrapAll('<div id="' + stickyId + 'StickyWrapper"></div>');
			if (center) {
				stickyElement.wrapAll('<div id="' + stickyId + 'StickyCenterWrapper"></div>');
				$("#" + stickyId + "StickyCenterWrapper").css("margin","0 auto");
			}
			stickyElement.parent().css("height",stickyElementHeight).css("width",stickyElementWidth);
			$(window).scroll(function(){
				elementPosition = stickyElement.offset().top - $(window).scrollTop();
				if (elementPosition <= topPadding) {
					stickyElement.css("position","fixed").css("top",topPadding);
				}
				if ($(window).scrollTop() <= regPosition - topPadding) {
					stickyElement.css("position","static").css("top",$(window).scrollTop());
				}
			});
		});
	};
})(jQuery);
