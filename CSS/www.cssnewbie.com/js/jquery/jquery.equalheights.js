/**
 * Equal Heights Plugin
 * Equalize the heights of elements. Great for columns.
 *
 * Copyright (c) 2008 Rob Glazebrook (cssnewbie.com) 
 *
 * Usage Example: $('.columns').equalHeights();
 *
 */

(function($) {
	$.fn.equalHeights = function() {
		tallest = 0;
		this.each(function() {
			if($(this).height() > tallest) {
				tallest = $(this).height();
			}
		});
		return this.each(function() {
			$(this).height(tallest);
		});
	}
})(jQuery);