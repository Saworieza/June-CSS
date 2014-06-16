/* 

	Title:		jQuery Tweet Handle by Tyler Colwell
	Version:	1.0.jQ
	Created By: Tyler Colwell
	Website:    http://tyler.tc/
	
	Copyright © 2010-2012 Tyler Colwell
		- ALL RIGHTS RESERVED
		- NO NOT DISTRIBUTE / BUNDLE
		- NOT FOR RESALE
	
*/

(function(c){c.fn.twyt=function(d){function a(a){var c=a.type,a=jQuery(a.target.parentNode).attr("data-id"),d=b.requireBoth;"tweet"==c?(tcsl_createCookie("tcsl_"+a+"_tweet","true",365),!0==d?!0==tcsl_readCookie("tcsl_"+a+"_tweet")&&!0==tcsl_readCookie("tcsl_"+a+"_follow")&&window.location.reload(!0):window.location.reload(!0)):"follow"==c&&(tcsl_createCookie("tcsl_"+a+"_follow","true",365),!0==d?!0==tcsl_readCookie("tcsl_"+a+"_tweet")&&!0==tcsl_readCookie("tcsl_"+a+"_follow")&&window.location.reload(!0):
window.location.reload(!0))}var b={makeCookie:!0,requireBoth:!1,ajaxurl:""},d=c.extend(b,d);twttr.events.bind("tweet",a);twttr.events.bind("follow",a)}})(jQuery);function tcsl_createCookie(c,d,a){if(a){var b=new Date;b.setTime(b.getTime()+864E5*a);a="; expires="+b.toGMTString()}else a="";document.cookie=c+"="+d+a+"; path=/"}
function tcsl_readCookie(c){for(var c=c+"=",d=document.cookie.split(";"),a=0;a<d.length;a++){for(var b=d[a];" "==b.charAt(0);)b=b.substring(1,b.length);if(0==b.indexOf(c))return b.substring(c.length,b.length)}return null};