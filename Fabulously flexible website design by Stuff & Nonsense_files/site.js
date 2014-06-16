"use strict";!function(a){var c={},b={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4000,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};a.fn.bxSlider=function(aq){if(0==this.length){return this}if(this.length>1){return this.each(function(){a(this).bxSlider(aq)}),this}var ap={},am=this;c.el=this;var aB=a(window).width(),at=a(window).height(),ay=function(){ap.settings=a.extend({},b,aq),ap.settings.slideWidth=parseInt(ap.settings.slideWidth),ap.children=am.children(ap.settings.slideSelector),ap.children.length<ap.settings.minSlides&&(ap.settings.minSlides=ap.children.length),ap.children.length<ap.settings.maxSlides&&(ap.settings.maxSlides=ap.children.length),ap.settings.randomStart&&(ap.settings.startSlide=Math.floor(Math.random()*ap.children.length)),ap.active={index:ap.settings.startSlide},ap.carousel=ap.settings.minSlides>1||ap.settings.maxSlides>1,ap.carousel&&(ap.settings.preloadImages="all"),ap.minThreshold=ap.settings.minSlides*ap.settings.slideWidth+(ap.settings.minSlides-1)*ap.settings.slideMargin,ap.maxThreshold=ap.settings.maxSlides*ap.settings.slideWidth+(ap.settings.maxSlides-1)*ap.settings.slideMargin,ap.working=!1,ap.controls={},ap.interval=null,ap.animProp="vertical"==ap.settings.mode?"top":"left",ap.usingCSS=ap.settings.useCSS&&"fade"!=ap.settings.mode&&function(){var f=document.createElement("div"),g=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var d in g){if(void 0!==f.style[g[d]]){return ap.cssPrefix=g[d].replace("Perspective","").toLowerCase(),ap.animProp="-"+ap.cssPrefix+"-transform",!0}}return !1}(),"vertical"==ap.settings.mode&&(ap.settings.maxSlides=ap.settings.minSlides),am.data("origStyle",am.attr("style")),am.children(ap.settings.slideSelector).each(function(){a(this).data("origStyle",a(this).attr("style"))}),az()},az=function(){am.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),ap.viewport=am.parent(),ap.loader=a('<div class="bx-loading" />'),ap.viewport.prepend(ap.loader),am.css({width:"horizontal"==ap.settings.mode?100*ap.children.length+215+"%":"auto",position:"relative"}),ap.usingCSS&&ap.settings.easing?am.css("-"+ap.cssPrefix+"-transition-timing-function",ap.settings.easing):ap.settings.easing||(ap.settings.easing="swing"),ax(),ap.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),ap.viewport.parent().css({maxWidth:ak()}),ap.settings.pager||ap.viewport.parent().css({margin:"0 auto 0px"}),ap.children.css({"float":"horizontal"==ap.settings.mode?"left":"none",listStyle:"none",position:"relative"}),ap.children.css("width",al()),"horizontal"==ap.settings.mode&&ap.settings.slideMargin>0&&ap.children.css("marginRight",ap.settings.slideMargin),"vertical"==ap.settings.mode&&ap.settings.slideMargin>0&&ap.children.css("marginBottom",ap.settings.slideMargin),"fade"==ap.settings.mode&&(ap.children.css({position:"absolute",zIndex:0,display:"none"}),ap.children.eq(ap.settings.startSlide).css({zIndex:50,display:"block"})),ap.controls.el=a('<div class="bx-controls" />'),ap.settings.captions&&J(),ap.active.last=ap.settings.startSlide==ai()-1,ap.settings.video&&am.fitVids();var d=ap.children.eq(ap.settings.startSlide);"all"==ap.settings.preloadImages&&(d=ap.children),ap.settings.ticker?ap.settings.pager=!1:(ap.settings.pager&&F(),ap.settings.controls&&ad(),ap.settings.auto&&ap.settings.autoControls&&ab(),(ap.settings.controls||ap.settings.autoControls||ap.settings.pager)&&ap.viewport.after(ap.controls.el)),aw(d,av)},aw=function(g,d){var f=g.find("img, iframe").length;if(0==f){return d(),void 0}var h=0;g.find("img, iframe").each(function(){a(this).one("load",function(){++h==f&&d()}).each(function(){this.complete&&a(this).load()})})},av=function(){if(ap.settings.infiniteLoop&&"fade"!=ap.settings.mode&&!ap.settings.ticker){var g="vertical"==ap.settings.mode?ap.settings.minSlides:ap.settings.maxSlides,d=ap.children.slice(0,g).clone().addClass("bx-clone"),f=ap.children.slice(-g).clone().addClass("bx-clone");am.append(d).prepend(f)}ap.loader.remove(),G(),"vertical"==ap.settings.mode&&(ap.settings.adaptiveHeight=!0),ap.viewport.height(ao()),am.redrawSlider(),ap.settings.onSliderLoad(ap.active.index),ap.initialized=!0,ap.settings.responsive&&a(window).bind("resize",ae),ap.settings.auto&&ap.settings.autoStart&&aa(),ap.settings.ticker&&U(),ap.settings.pager&&Z(ap.settings.startSlide),ap.settings.controls&&s(),ap.settings.touchEnabled&&!ap.settings.ticker&&K()},ao=function(){var f=0,d=a();if("vertical"==ap.settings.mode||ap.settings.adaptiveHeight){if(ap.carousel){var g=1==ap.settings.moveSlides?ap.active.index:ap.active.index*ar();for(d=ap.children.eq(g),i=1;i<=ap.settings.maxSlides-1;i++){d=g+i>=ap.children.length?d.add(ap.children.eq(i-1)):d.add(ap.children.eq(g+i))}}else{d=ap.children.eq(ap.active.index)}}else{d=ap.children}return"vertical"==ap.settings.mode?(d.each(function(){f+=a(this).outerHeight()}),ap.settings.slideMargin>0&&(f+=ap.settings.slideMargin*(ap.settings.minSlides-1))):f=Math.max.apply(Math,d.map(function(){return a(this).outerHeight(!1)}).get()),f},ak=function(){var d="100%";return ap.settings.slideWidth>0&&(d="horizontal"==ap.settings.mode?ap.settings.maxSlides*ap.settings.slideWidth+(ap.settings.maxSlides-1)*ap.settings.slideMargin:ap.settings.slideWidth),d},al=function(){var d=ap.settings.slideWidth,f=ap.viewport.width();return 0==ap.settings.slideWidth||ap.settings.slideWidth>f&&!ap.carousel||"vertical"==ap.settings.mode?d=f:ap.settings.maxSlides>1&&"horizontal"==ap.settings.mode&&(f>ap.maxThreshold||f<ap.minThreshold&&(d=(f-ap.settings.slideMargin*(ap.settings.minSlides-1))/ap.settings.minSlides)),d},ax=function(){var d=1;if("horizontal"==ap.settings.mode&&ap.settings.slideWidth>0){if(ap.viewport.width()<ap.minThreshold){d=ap.settings.minSlides}else{if(ap.viewport.width()>ap.maxThreshold){d=ap.settings.maxSlides}else{var f=ap.children.first().width();d=Math.floor(ap.viewport.width()/f)}}}else{"vertical"==ap.settings.mode&&(d=ap.settings.minSlides)}return d},ai=function(){var f=0;if(ap.settings.moveSlides>0){if(ap.settings.infiniteLoop){f=ap.children.length/ar()}else{for(var g=0,d=0;g<ap.children.length;){++f,g=d+ax(),d+=ap.settings.moveSlides<=ax()?ap.settings.moveSlides:ax()}}}else{f=Math.ceil(ap.children.length/ax())}return f},ar=function(){return ap.settings.moveSlides>0&&ap.settings.moveSlides<=ax()?ap.settings.moveSlides:ax()},G=function(){if(ap.children.length>ap.settings.maxSlides&&ap.active.last&&!ap.settings.infiniteLoop){if("horizontal"==ap.settings.mode){var f=ap.children.last(),g=f.position();aA(-(g.left-(ap.viewport.width()-f.width())),"reset",0)}else{if("vertical"==ap.settings.mode){var d=ap.children.length-ap.settings.minSlides,g=ap.children.eq(d).position();aA(-g.top,"reset",0)}}}else{var g=ap.children.eq(ap.active.index*ar()).position();ap.active.index==ai()-1&&(ap.active.last=!0),void 0!=g&&("horizontal"==ap.settings.mode?aA(-g.left,"reset",0):"vertical"==ap.settings.mode&&aA(-g.top,"reset",0))}},aA=function(g,k,f,h){if(ap.usingCSS){var l="vertical"==ap.settings.mode?"translate3d(0, "+g+"px, 0)":"translate3d("+g+"px, 0, 0)";am.css("-"+ap.cssPrefix+"-transition-duration",f/1000+"s"),"slide"==k?(am.css(ap.animProp,l),am.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){am.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),ac()})):"reset"==k?am.css(ap.animProp,l):"ticker"==k&&(am.css("-"+ap.cssPrefix+"-transition-timing-function","linear"),am.css(ap.animProp,l),am.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){am.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),aA(h.resetValue,"reset",0),Q()}))}else{var d={};d[ap.animProp]=g,"slide"==k?am.animate(d,f,ap.settings.easing,function(){ac()}):"reset"==k?am.css(ap.animProp,g):"ticker"==k&&am.animate(d,speed,"linear",function(){aA(h.resetValue,"reset",0),Q()})}},aj=function(){for(var g="",d=ai(),f=0;d>f;f++){var h="";ap.settings.buildPager&&a.isFunction(ap.settings.buildPager)?(h=ap.settings.buildPager(f),ap.pagerEl.addClass("bx-custom-pager")):(h=f+1,ap.pagerEl.addClass("bx-default-pager")),g+='<div class="bx-pager-item"><a href="" data-slide-index="'+f+'" class="bx-pager-link">'+h+"</a></div>"}ap.pagerEl.html(g)},F=function(){ap.settings.pagerCustom?ap.pagerEl=a(ap.settings.pagerCustom):(ap.pagerEl=a('<div class="bx-pager" />'),ap.settings.pagerSelector?a(ap.settings.pagerSelector).html(ap.pagerEl):ap.controls.el.addClass("bx-has-pager").append(ap.pagerEl),aj()),ap.pagerEl.delegate("a","click",an)},ad=function(){ap.controls.next=a('<a class="bx-next" href="">'+ap.settings.nextText+"</a>"),ap.controls.prev=a('<a class="bx-prev" href="">'+ap.settings.prevText+"</a>"),ap.controls.next.bind("click",ah),ap.controls.prev.bind("click",ag),ap.settings.nextSelector&&a(ap.settings.nextSelector).append(ap.controls.next),ap.settings.prevSelector&&a(ap.settings.prevSelector).append(ap.controls.prev),ap.settings.nextSelector||ap.settings.prevSelector||(ap.controls.directionEl=a('<div class="bx-controls-direction" />'),ap.controls.directionEl.append(ap.controls.prev).append(ap.controls.next),ap.controls.el.addClass("bx-has-controls-direction").append(ap.controls.directionEl))},ab=function(){ap.controls.start=a('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+ap.settings.startText+"</a></div>"),ap.controls.stop=a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+ap.settings.stopText+"</a></div>"),ap.controls.autoEl=a('<div class="bx-controls-auto" />'),ap.controls.autoEl.delegate(".bx-start","click",au),ap.controls.autoEl.delegate(".bx-stop","click",R),ap.settings.autoControlsCombine?ap.controls.autoEl.append(ap.controls.start):ap.controls.autoEl.append(ap.controls.start).append(ap.controls.stop),ap.settings.autoControlsSelector?a(ap.settings.autoControlsSelector).html(ap.controls.autoEl):ap.controls.el.addClass("bx-has-controls-auto").append(ap.controls.autoEl),af(ap.settings.autoStart?"stop":"start")},J=function(){ap.children.each(function(){var d=a(this).find("img:first").attr("title");void 0!=d&&(""+d).length&&a(this).append('<div class="bx-caption"><span>'+d+"</span></div>")})},ah=function(d){ap.settings.auto&&am.stopAuto(),am.goToNextSlide(),d.preventDefault()},ag=function(d){ap.settings.auto&&am.stopAuto(),am.goToPrevSlide(),d.preventDefault()},au=function(d){am.startAuto(),d.preventDefault()},R=function(d){am.stopAuto(),d.preventDefault()},an=function(g){ap.settings.auto&&am.stopAuto();var d=a(g.currentTarget),f=parseInt(d.attr("data-slide-index"));f!=ap.active.index&&am.goToSlide(f),g.preventDefault()},Z=function(f){var d=ap.children.length;return"short"==ap.settings.pagerType?(ap.settings.maxSlides>1&&(d=Math.ceil(ap.children.length/ap.settings.maxSlides)),ap.pagerEl.html(f+1+ap.settings.pagerShortSeparator+d),void 0):(ap.pagerEl.find("a").removeClass("active"),ap.pagerEl.each(function(g,h){a(h).find("a").eq(f).addClass("active")}),void 0)},ac=function(){if(ap.settings.infiniteLoop){var d="";0==ap.active.index?d=ap.children.eq(0).position():ap.active.index==ai()-1&&ap.carousel?d=ap.children.eq((ai()-1)*ar()).position():ap.active.index==ap.children.length-1&&(d=ap.children.eq(ap.children.length-1).position()),"horizontal"==ap.settings.mode?aA(-d.left,"reset",0):"vertical"==ap.settings.mode&&aA(-d.top,"reset",0)}ap.working=!1,ap.settings.onSlideAfter(ap.children.eq(ap.active.index),ap.oldIndex,ap.active.index)},af=function(d){ap.settings.autoControlsCombine?ap.controls.autoEl.html(ap.controls[d]):(ap.controls.autoEl.find("a").removeClass("active"),ap.controls.autoEl.find("a:not(.bx-"+d+")").addClass("active"))},s=function(){1==ai()?(ap.controls.prev.addClass("disabled"),ap.controls.next.addClass("disabled")):!ap.settings.infiniteLoop&&ap.settings.hideControlOnEnd&&(0==ap.active.index?(ap.controls.prev.addClass("disabled"),ap.controls.next.removeClass("disabled")):ap.active.index==ai()-1?(ap.controls.next.addClass("disabled"),ap.controls.prev.removeClass("disabled")):(ap.controls.prev.removeClass("disabled"),ap.controls.next.removeClass("disabled")))},aa=function(){ap.settings.autoDelay>0?setTimeout(am.startAuto,ap.settings.autoDelay):am.startAuto(),ap.settings.autoHover&&am.hover(function(){ap.interval&&(am.stopAuto(!0),ap.autoPaused=!0)},function(){ap.autoPaused&&(am.startAuto(!0),ap.autoPaused=null)})},U=function(){var f=0;if("next"==ap.settings.autoDirection){am.append(ap.children.clone().addClass("bx-clone"))}else{am.prepend(ap.children.clone().addClass("bx-clone"));var d=ap.children.first().position();f="horizontal"==ap.settings.mode?-d.left:-d.top}aA(f,"reset",0),ap.settings.pager=!1,ap.settings.controls=!1,ap.settings.autoControls=!1,ap.settings.tickerHover&&!ap.usingCSS&&ap.viewport.hover(function(){am.stop()},function(){var k=0;ap.children.each(function(){k+="horizontal"==ap.settings.mode?a(this).outerWidth(!0):a(this).outerHeight(!0)});var g=ap.settings.speed/k,h="horizontal"==ap.settings.mode?"left":"top",l=g*(k-Math.abs(parseInt(am.css(h))));Q(l)}),Q()},Q=function(g){speed=g?g:ap.settings.speed;var k={left:0,top:0},f={left:0,top:0};"next"==ap.settings.autoDirection?k=am.find(".bx-clone").first().position():f=ap.children.first().position();var h="horizontal"==ap.settings.mode?-k.left:-k.top,l="horizontal"==ap.settings.mode?-f.left:-f.top,d={resetValue:l};aA(h,"ticker",speed,d)},K=function(){ap.touch={start:{x:0,y:0},end:{x:0,y:0}},ap.viewport.bind("touchstart",j)},j=function(d){if(ap.working){d.preventDefault()}else{ap.touch.originalPos=am.position();var f=d.originalEvent;ap.touch.start.x=f.changedTouches[0].pageX,ap.touch.start.y=f.changedTouches[0].pageY,ap.viewport.bind("touchmove",e),ap.viewport.bind("touchend",t)}},e=function(f){var k=f.originalEvent,d=Math.abs(k.changedTouches[0].pageX-ap.touch.start.x),g=Math.abs(k.changedTouches[0].pageY-ap.touch.start.y);if(3*d>g&&ap.settings.preventDefaultSwipeX?f.preventDefault():3*g>d&&ap.settings.preventDefaultSwipeY&&f.preventDefault(),"fade"!=ap.settings.mode&&ap.settings.oneToOneTouch){var l=0;if("horizontal"==ap.settings.mode){var h=k.changedTouches[0].pageX-ap.touch.start.x;l=ap.touch.originalPos.left+h}else{var h=k.changedTouches[0].pageY-ap.touch.start.y;l=ap.touch.originalPos.top+h}aA(l,"reset",0)}},t=function(f){ap.viewport.unbind("touchmove",e);var h=f.originalEvent,d=0;if(ap.touch.end.x=h.changedTouches[0].pageX,ap.touch.end.y=h.changedTouches[0].pageY,"fade"==ap.settings.mode){var g=Math.abs(ap.touch.start.x-ap.touch.end.x);g>=ap.settings.swipeThreshold&&(ap.touch.start.x>ap.touch.end.x?am.goToNextSlide():am.goToPrevSlide(),am.stopAuto())}else{var g=0;"horizontal"==ap.settings.mode?(g=ap.touch.end.x-ap.touch.start.x,d=ap.touch.originalPos.left):(g=ap.touch.end.y-ap.touch.start.y,d=ap.touch.originalPos.top),!ap.settings.infiniteLoop&&(0==ap.active.index&&g>0||ap.active.last&&0>g)?aA(d,"reset",200):Math.abs(g)>=ap.settings.swipeThreshold?(0>g?am.goToNextSlide():am.goToPrevSlide(),am.stopAuto()):aA(d,"reset",200)}ap.viewport.unbind("touchend",t)},ae=function(){var f=a(window).width(),d=a(window).height();(aB!=f||at!=d)&&(aB=f,at=d,am.redrawSlider())};return am.goToSlide=function(o,k){if(!ap.working&&ap.active.index!=o){if(ap.working=!0,ap.oldIndex=ap.active.index,ap.active.index=0>o?ai()-1:o>=ai()?0:o,ap.settings.onSlideBefore(ap.children.eq(ap.active.index),ap.oldIndex,ap.active.index),"next"==k?ap.settings.onSlideNext(ap.children.eq(ap.active.index),ap.oldIndex,ap.active.index):"prev"==k&&ap.settings.onSlidePrev(ap.children.eq(ap.active.index),ap.oldIndex,ap.active.index),ap.active.last=ap.active.index>=ai()-1,ap.settings.pager&&Z(ap.active.index),ap.settings.controls&&s(),"fade"==ap.settings.mode){ap.settings.adaptiveHeight&&ap.viewport.height()!=ao()&&ap.viewport.animate({height:ao()},ap.settings.adaptiveHeightSpeed),ap.children.filter(":visible").fadeOut(ap.settings.speed).css({zIndex:0}),ap.children.eq(ap.active.index).css("zIndex",51).fadeIn(ap.settings.speed,function(){a(this).css("zIndex",50),ac()})}else{ap.settings.adaptiveHeight&&ap.viewport.height()!=ao()&&ap.viewport.animate({height:ao()},ap.settings.adaptiveHeightSpeed);var u=0,f={left:0,top:0};if(!ap.settings.infiniteLoop&&ap.carousel&&ap.active.last){if("horizontal"==ap.settings.mode){var r=ap.children.eq(ap.children.length-1);f=r.position(),u=ap.viewport.width()-r.outerWidth()}else{var h=ap.children.length-ap.settings.minSlides;f=ap.children.eq(h).position()}}else{if(ap.carousel&&ap.active.last&&"prev"==k){var p=1==ap.settings.moveSlides?ap.settings.maxSlides-ar():(ai()-1)*ar()-(ap.children.length-ap.settings.maxSlides),r=am.children(".bx-clone").eq(p);f=r.position()}else{if("next"==k&&0==ap.active.index){f=am.find("> .bx-clone").eq(ap.settings.maxSlides).position(),ap.active.last=!1}else{if(o>=0){var q=o*ar();f=ap.children.eq(q).position()}}}}if("undefined"!=typeof f){var m="horizontal"==ap.settings.mode?-(f.left-u):-f.top;aA(m,"slide",ap.settings.speed)}}}},am.goToNextSlide=function(){if(ap.settings.infiniteLoop||!ap.active.last){var d=parseInt(ap.active.index)+1;am.goToSlide(d,"next")}},am.goToPrevSlide=function(){if(ap.settings.infiniteLoop||0!=ap.active.index){var d=parseInt(ap.active.index)-1;am.goToSlide(d,"prev")}},am.startAuto=function(d){ap.interval||(ap.interval=setInterval(function(){"next"==ap.settings.autoDirection?am.goToNextSlide():am.goToPrevSlide()},ap.settings.pause),ap.settings.autoControls&&1!=d&&af("stop"))},am.stopAuto=function(d){ap.interval&&(clearInterval(ap.interval),ap.interval=null,ap.settings.autoControls&&1!=d&&af("start"))},am.getCurrentSlide=function(){return ap.active.index},am.getSlideCount=function(){return ap.children.length},am.redrawSlider=function(){ap.children.add(am.find(".bx-clone")).outerWidth(al()),ap.viewport.css("height",ao()),ap.settings.ticker||G(),ap.active.last&&(ap.active.index=ai()-1),ap.active.index>=ai()&&(ap.active.last=!0),ap.settings.pager&&!ap.settings.pagerCustom&&(aj(),Z(ap.active.index))},am.destroySlider=function(){ap.initialized&&(ap.initialized=!1,a(".bx-clone",this).remove(),ap.children.each(function(){void 0!=a(this).data("origStyle")?a(this).attr("style",a(this).data("origStyle")):a(this).removeAttr("style")}),void 0!=a(this).data("origStyle")?this.attr("style",a(this).data("origStyle")):a(this).removeAttr("style"),a(this).unwrap().unwrap(),ap.controls.el&&ap.controls.el.remove(),ap.controls.next&&ap.controls.next.remove(),ap.controls.prev&&ap.controls.prev.remove(),ap.pagerEl&&ap.pagerEl.remove(),a(".bx-caption",this).remove(),ap.controls.autoEl&&ap.controls.autoEl.remove(),clearInterval(ap.interval),ap.settings.responsive&&a(window).unbind("resize",ae))},am.reloadSlider=function(d){void 0!=d&&(aq=d),am.destroySlider(),ay()},ay(),this}}(jQuery);window.debug=window.log=function(){window.log.history=window.log.history||[];window.log.history.push(arguments);if(console!==undefined){console.log(Array.prototype.slice.call(arguments))}};if(!window.getComputedStyle){window.getComputedStyle=function(a,b){this.el=a;this.getPropertyValue=function(d){var c=/(\-([a-z]){1})/g;if(d==="float"){d="styleFloat"}if(c.test(d)){d=d.replace(c,function(){return arguments[2].toUpperCase()})}return a.currentStyle[d]||null};return this}}var get_size=function(){var a="",b=null;if(typeof window.getComputedStyle==="function"){a=window.getComputedStyle(document.body,":after").getPropertyValue("content")}if(typeof a==="string"&&a.indexOf("320")!==-1){b="bp1"}else{if(typeof a==="string"&&a.indexOf("bp2")!==-1){b="bp2"}else{if(typeof a==="string"&&a.indexOf("bp3")!==-1){b="bp3"}else{if(typeof a==="string"&&a.indexOf("bp4")!==-1){b="bp4"}else{if(typeof a==="string"&&a.indexOf("bp5")!==-1){b="bp5"}else{if(typeof a==="string"&&a.indexOf("bp6")!==-1){b="bp6"}else{if(typeof a==="string"&&a.indexOf("bp7")!==-1){b="bp7"}else{if(typeof a==="string"&&a.indexOf("bp8")!==-1){b="bp8"}}}}}}}}return b};if(jQuery!==undefined){var current_size=get_size();jQuery(window).on("resize",function(b){var a=get_size();if(a!==current_size){current_size=a}})}if(typeof jQuery!=="undefined"){(function(a,b){b(document).ready(function(){var d=b("html, body"),e=d.filter("body"),c={easing:"swing",speed:500};e.on("click",'a[rel~="internal"][href^="#"]',function(h){var j=b(h.target).closest("a"),g="",f=null;if(j.length){g=j.attr("href")}if(g.length){f=b(g)}if(f&&f.length){d.animate({scrollTop:f.offset().top},c).promise().done(function(){window.location.hash=g});h.preventDefault()}})})}(typeof App==="object"?App:{},jQuery))}if(jQuery!==undefined){(function(a,b){b(document).ready(function(){var j="#nav-main",h=b("body"),d=b(".logo"),k=d.clone().addClass("logo-clone"),l=b('nav[role="navigation"]'),f=l.find(j),g=l.find('a[href="'+j+'"]'),e=500,c={shown:"shown",bodyShown:"navigation-shown"};h.on("click",function(o){var n=b(o.target),p=n.closest(g).length,m=n.closest(l).length;if(p){l.addClass(c.shown);h.addClass(c.bodyShown);f.animate({opacity:1,display:"show"},e,function(){});g.animate({opacity:0,display:"hide"},e);o.preventDefault()}else{if(!m&&b.inArray(current_size,["bp1","bp2"])!==-1){l.removeClass(c.shown);h.removeClass(c.bodyShown);f.animate({opacity:0,display:"hide"},e);g.animate({opacity:1,display:"show"})}}});b(window).on("resize",function(m){if(b.inArray(current_size,["bp1","bp2"])===-1){f.show().css({opacity:1});k.remove()}else{if(!l.is("."+c.shown)){f.hide().css({opacity:0});k.remove()}}})})}(typeof App==="object"?App:{},jQuery))}if(jQuery!==undefined){(function(a,b){b(document).ready(function(){var d=150,c=true,e={active:"active"};b(".nav-sections, .nav-tabs").on("click",'a[data-trigger="section-toggle"]',function(h){var j=b(h.target).closest("a"),k=j.closest("li"),g="",f=null;if(j.length){g=j.attr("href")}if(g.length){f=b(g)}if(f&&f.length){h.preventDefault();k.add(j).addClass(e.active);k.siblings().removeClass(e.active).find("a").removeClass(e.active);if(c===true){f.siblings(".section-toggle").fadeOut(d,function(){f.fadeIn(d)})}else{f.addClass(e.active).siblings(".section-toggle").removeClass(e.active)}}});b("body").on("click",".section-header__trigger, .hentry__trigger",function(g){var h=b(g.target).closest(".section-header__trigger, .hentry__trigger"),j,f;if(h.is(".section-header__trigger")){j=h.closest(".section-header");f=j.find(".section-header__hidden")}else{if(h.is(".hentry__trigger")){j=h.closest(".hentry");f=j.find(".hentry__hidden")}}if(f.is(":visible")){f.slideUp()}else{f.slideDown()}g.preventDefault()})})}(typeof App==="object"?App:{},jQuery))}if(jQuery!==undefined){(function(a,b){b(document).ready(function(){var j=b(".brands"),d={mode:"horizontal",speed:750,pause:20000,infiniteLoop:true,easing:"swing",adaptiveHeight:true,adaptiveHeightSpeed:500,responsive:true,touchEnabled:true,pager:false,controls:false,auto:true,minSlides:1,maxSlides:1,moveSlides:1,slideWidth:5000,slideMargin:10},h=["bp1","bp2"],f=function(){if(b.fn.bxSlider&&!c){g=j.bxSlider(d);c=true}},e=function(){if(b.fn.bxSlider&&c){c=false;g.destroySlider();window.setTimeout(function(){j.add(j.children()).removeAttr("style")},50)}},c=false,g;b(window).on("resize",function(k){if(b.inArray(current_size,h)!==-1){f.call()}else{e.call()}});if(b.inArray(current_size,h)!==-1){f.call()}})}(typeof App==="object"?App:{},jQuery))}if(jQuery!==undefined){(function(a,b){b(document).ready(function(){var g=b(".illustration"),e=b(".apes"),j={small:"illustration--small",trigger:"illustration__trigger",show:"illustration__trigger--show",hide:"illustration__trigger--hide"},h={hide:"Hide header",show:"Show header"},d=b("<a></a>",{text:h.hide,title:h.hide,"class":j.trigger,href:"#",click:function(k){if(g.is("."+j.small)){g.removeClass(j.small);f(d)}else{g.addClass(j.small);c(d)}k.preventDefault()}}),c=function(k){k.addClass(j.show).removeClass(j.hide).text(h.show).attr("title",h.show)},f=function(k){k.addClass(j.hide).removeClass(j.show).text(h.hide).attr("title",h.hide)};if(g.is("."+j.small)){c(d)}else{f(d)}e.on("click",function(m){var k=b(m.target),l=k.closest(".chimp").length?true:false,n=k.closest(".gorillas").length?true:false;if(l&&current_size==="bp6"){e.addClass("focus-chimp").removeClass("focus-gorillas")}else{if(n&&current_size==="bp6"){e.addClass("focus-gorillas").removeClass("focus-chimp")}else{e.removeClass("focus-gorillas").removeClass("focus-chimp")}}});if(!b("body").is(".index")){b('nav[role="navigation"]').append(d)}b(window).on("resize",function(k){if(current_size!=="bp6"){e.removeClass("focus-gorillas").removeClass("focus-chimp")}})})}(typeof App==="object"?App:{},jQuery))}if(jQuery!==undefined){(function(a,b){b(document).ready(function(){var c=b("<a></a>",{text:"Show details",title:"Show details","class":"hentry__trigger",href:"#"}),d=b("<a></a>",{text:"Show topics",title:"Show topics","class":"section-header__trigger",href:"#"});b("article.hentry:has(.hentry__hidden)").append(c);b(".section-header:has(.section-header__hidden)").append(d)})}(typeof App==="object"?App:{},jQuery))};