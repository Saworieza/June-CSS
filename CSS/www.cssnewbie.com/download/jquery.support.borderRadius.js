// This tiny snippet was created by Rob Glazebrook (@robbyg) on April 15, 2010.
// Original Article: http://www.cssnewbie.com/test-for-border-radius-support/
// Use this snippet anywhere you wish, but I'd appreciate attribution (such as leaving this in place!)

jQuery(function() {
	jQuery.support.borderRadius = false;
	jQuery.each(['BorderRadius','MozBorderRadius','WebkitBorderRadius','OBorderRadius','KhtmlBorderRadius'], function() {
		if(document.body.style[this] !== undefined) jQuery.support.borderRadius = true;
		return (!jQuery.support.borderRadius);
	});
});
