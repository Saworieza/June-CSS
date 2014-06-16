$(function(){

	var bars = '<div id="bars"><div class="n"></div><div class="n"></div><div class="m"></div><div class="m"></div><div class="m"></div><div class="c"></div></div>'
	$('#container').prepend(bars).css({paddingTop: 0});
	$('body').prepend('<div id="shadow" />');
	
	var totalHovers = 0;
	var baseline = false;
	$('#bars div').hover(function(){
		$(this).stop(false, true).animate({
			top: '5px'
		});
		totalHovers++;
		if(totalHovers >5){
		  totalHovers = 0;
		  if(!baseline){
		    $('#container').css('background','url(http://ui.www.jsuth.com/images/baseline.png) 0px -2px');
		  } else {
		    $('#container').css('background','');
		  }
		  baseline = !baseline;
		}
	},function(){
		$(this).stop(false, true).animate({
			top: '0px'
		});
	});
	
	SyntaxHighlighter.all();
	
	var standard = '<a class="tweets" href="{{allTweetsURL}}">' +
								'<strong>{{count}}</strong>' +
								'tweets' +
								'</a>' +
								'<a href="{{retweetURL}}" class="btn">retweet</a>';
	
	$('.retweet').customRetweet({
	 template: standard,
	 account: 'JoelSutherland',
	 title: document.title.replace(' - Joel Sutherland',''),
	 retweetTemplate: 'RT @{{account}} - {{title}}: {{shortURL}}'
	});
	
	$('#blog').hide().removeClass('hidden')
		.bind('toggle', function(){
			var $blog = $(this);
			if($blog.is(':visible')) $blog.trigger('hide');
			else $blog.trigger('show')
		})
		.bind('show', function(){
			$(this).slideDown('show');
		})
		.bind('hide', function(){
			$(this).slideUp('hide');
		});
	$('#blogbutton').removeAttr('href').click(function(){
		$('#blog').trigger('toggle');
	});
	
	var delay;
	var searchDefault = $('#searchbox').val();
	var $results = $('ul.results');
	$results.hide().removeClass('hidden');
	$('#searchbox')
		.focus(function(){
			if($(this).val() == searchDefault) $(this).val('');
		})
		.blur(function(){
			if($(this).val() == '') $(this).val(searchDefault);
		})
		.keyup(function(){
			 if(delay) clearTimeout(delay);
			 delay = setTimeout("getResults()",500);
    $results.fadeOut('fast');
		});
		
});

function getResults(){
  var phrase = $('#searchbox').val();
  var $results = $('ul.results');
  if (phrase.length > 3) {
    $results.empty().slideUp('slow');
    hifi({ 'type': 'page', 'content': {'like': phrase } }).count(5).each(function(page){
      if(page.excerpt === undefined || page.excerpt.length < 5)
        page.excerpt = strip(page.content).substring(0,190) + '...';
      var result = '<li><img src="http://ui.jsuth.com/images/favicon.ico"><h5><a href="' + page.url + '">' + page.title + '</a></h5><p>' + page.excerpt + '</p></li>';
      $results.append(result);
    },function(){
      $results.slideDown('show');
    })
  } else {
    $results.empty().fadeOut('fast');
  }
}

function strip(html)
{
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent||tmp.innerText;
}