// Fix iPhone viewport scaling bug on orientation change
// By @mathias, @cheeaun and @jdalton
(function(doc) {

	var addEvent = 'addEventListener',
	    type = 'gesturestart',
	    qsa = 'querySelectorAll',
	    scales = [1, 1],
	    meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

	function fix() {
		meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
		doc.removeEventListener(type, fix, true);
	}

	if ((meta = meta[meta.length - 1]) && addEvent in doc) {
		fix();
		scales = [.25, 1.6];
		doc[addEvent](type, fix, true);
	}

}(document));

$(document).ready(function(){

	// remove the first empty space on <pre><code> element
	$("pre code").each(function() {
  		var pre = $(this);
  		pre.text($.trim(pre.text()));  
	});
	   	 
	// wrap avatar
	$("img.avatar").each(function() {
		$(this).wrap(function(){
			return '<span class="' + $(this).attr('class') + '" style="background:url(' + $(this).attr('src') + ') no-repeat left top; width: ' + $(this).width() + 'px; height: ' + $(this).height() + 'px;" />';
		});
		$(this).removeClass('avatar')
		$(this).css("opacity","0");
	});
 
	//fade dropdown
	$("#main-nav li").hover(function(){
		$(this).find('ul:first:hidden').fadeIn();
	},function(){
		$(this).find('ul:first').fadeOut();
	});

	// toggle comments
	$('.commentwrap .collapse-all, .commentwrap .collapse').show();
	
	//expand all commententry
	$('.commentwrap .expand-all').click(function() {
		$(this).hide();
		$('.commentwrap .collapse-all').show();
		$('.commentlist .collapse').show();
		$('.commentlist .expand').hide();
		$('.commentlist .commententry').animate({
			height: "100%",
			opacity: 1
		}, 500);
		return false;
	});
	 
	//collapse all commententry
	$('.commentwrap .collapse-all').click(function() {
		$(this).hide();
		$('.commentwrap .expand-all').show();
		$('.commentlist .collapse').hide();
		$('.commentlist .expand').show();
		$('.commentlist .commententry').animate({
			height: '20px',
			opacity: .3
		}, 500);
		return false;
	}); 
	
	// expand commententry
	$('.commentwrap .expand').click(function() {
		$(this).hide();
		$(this).next('.collapse').show();
		$(this).prev('.commententry').animate({
			height: "100%",
			opacity: 1
		}, 500);
		return false;
	}); 
	
	// collapse commententry
	$('.commentwrap .collapse').click(function() {
		$(this).hide();
		$(this).prev('.expand').show();
		$(this).prev().prev('.commententry').animate({
			height: '20px',
			opacity: .3
		}, 500);
		return false;
	}); 

	
	// tabs
	$('ul.tabnav a').click(function() {
		var curChildIndex = $(this).parent().prevAll().length + 1;
		$(this).parent().parent().children('.current').removeClass('current');
		$(this).parent().addClass('current');
		$(this).parent().parent().next('.tabcontainer').children('.current').slideUp('fast',function() {
			$(this).removeClass('current');
			$(this).parent().children(':nth-child('+curChildIndex+')').slideDown('normal',function() {
				$(this).addClass('current');
			});
		});
		return false;								
	});


	// make archive li clickable
	$(".all-posts li").click(function() {
		window.location=$(this).find("a").attr("href"); return false;
	}); 

	// make sidebar network item clickable
	$(".network li").click(function() {
		window.location=$(this).find("a").attr("href"); return false;
	}); 

	// animate to top
	$("#back-top").hide();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		$('#back-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

	// placeholder text
	$('[placeholder]').focus(function() {
	  var input = $(this);
	  if (input.val() == input.attr('placeholder')) {
		input.val('');
		input.removeClass('placeholder');
	  }
	}).blur(function() {
	  var input = $(this);
	  if (input.val() == '' || input.val() == input.attr('placeholder')) {
		input.addClass('placeholder');
		input.val(input.attr('placeholder'));
	  }
	}).blur();
	$('[placeholder]').parents('form').submit(function() {
	  $(this).find('[placeholder]').each(function() {
		var input = $(this);
		if (input.val() == input.attr('placeholder')) {
		  input.val('');
		}
	  })
	});


});