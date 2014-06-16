$j=jQuery.noConflict();

$j(document).ready(function() {
    $j('.showComments').on('click', function(){
        $j('#displayComments').fadeIn();
        var disqus_shortname = 'paulund';

        $j.ajax({
            type: "GET",
            url: "http://" + disqus_shortname + ".disqus.com/embed.js",
            dataType: "script",
            cache: true
        });

        $j(this).fadeOut();
    });

    $j('.back-to-top').on('click', function(){
        $j('html, body').animate({scrollTop : 0},1000);
        return false;
    });
});