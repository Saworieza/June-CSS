$(document).ready(function(){
  $('#links > ul > li > a').on('click', function(e){
    e.preventDefault();
    var anchorid = $(this.hash);
    
    if(anchorid.length == 0) anchorid = $('a[name="' + this.hash.substr(1) + '"]');
    else anchorid = $('html');
    
    $('html, body').animate({ scrollTop: anchorid.offset().top }, 450);
  });
});