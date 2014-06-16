/* $ Cookie Min */
$.cookie = function(key, value, options) {
    if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = $.extend({}, options);
        if (value === null || value === undefined) {
            options.expires = -1
        }
        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days)
        }
        value = String(value);
        return(document.cookie = [encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''))
    }
    options = value || {};
    var result, decode = options.raw ? function(s) {
        return s
    } : decodeURIComponent;
    return(result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null
};

$(document).ready(function() {
    /* Banner Settings */
    var DesignModo = {};

    DesignModo.headerBanner = function(cookieName, expireDays) {
        var $banner = $('.header-banner'),
                cookie = $.cookie(cookieName);

        if (cookie !== 'banner-hidden') {
		$('#bar').css('margin-top','85px');
		$('.header-banner p').css('opacity', 1);
/* 		$('.header-banner video').width($(window).width()); */

		$banner.removeClass('banner-hidden')
			.find('.banner-close')
			.on('click', function(event) {
				event.preventDefault();
				$banner.slideUp('fast');
				$.cookie(cookieName, 'banner-hidden', { path: '/', expires: expireDays });
				$('#bar').animate({marginTop:0},'fast');
			});		
        }
    };

    DesignModo.headerBanner('sfvideo', 7); // cookieName, Days to cookie expire

// EX: DesignModo.headerBanner('pandoraui', 10);
// If the user click on "close button" the banner will be hidden for 10 days, then on next user visit the banner will show again.
// If the cookie name have changed the previous cookie after expire will not show again

// If you don't want to use any banner you can just comment to not load
// EX: <!-- <script src="js/banner.js"></script-->
});