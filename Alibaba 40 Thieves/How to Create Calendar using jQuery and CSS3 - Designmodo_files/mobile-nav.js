jQuery(document).ready(function() {
    if (Modernizr.touch) {


   jQuery('#page-menu-wrapper ul.main li a').click(function(){
        jQuery('#page-menu-wrapper ul.main li').removeClass('activ');
        jQuery(this).parent().toggleClass('activ');
  });

    }
});