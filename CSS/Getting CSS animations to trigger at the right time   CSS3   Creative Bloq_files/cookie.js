$(document).ready(function() { 

  /* Cookie bar */
  if ($.cookie('future_cookie_bar') == 'closed') {
    $('.future-cookie-bar').hide();
  } else {
    $('.future-cookie-bar').show();
  }
  // Show or hide on load depending on cookie
  $('.future-cookie-bar__dismiss').click(function(e) {
    e.preventDefault();
    $.cookie('future_cookie_bar','closed', { expires: 365, path: '/', domain: '.creativebloq.com' });
    $('.future-cookie-bar').hide();
  });

});