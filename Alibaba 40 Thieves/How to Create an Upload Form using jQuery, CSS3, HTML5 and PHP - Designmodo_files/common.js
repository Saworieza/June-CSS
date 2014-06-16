function load_script(url) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = url;
    var x = document.getElementsByTagName('head')[0];
    x.appendChild(s);
}

jQuery(document).ready(function($) {


    $("body").click(function() {
        $(".top-menu").parent().removeClass("active");
    });

    $(".top-menu").click(function(e) {
        e.stopPropagation();
    });

    $(".top-menu").click(function() {
        $(parent).toggleClass("active");
    });

    // SEARCH
    $('.gobutton').click(function() {
        $('#search').submit();
    });

    $(document).click(function() {
        $(".top-menu.search").removeClass('selected');
    });

    $(".top-menu.search").click(function(event) {
        $(this).addClass('selected');
        $('.search-input').focus();
        event.stopPropagation();
    });

    // CONTACT FORM
    $(document).on('submit', '#dm_contact_form_1', function() {
        var form_container = $(this);
        $('#dm_contact_form #message').empty();
        $('#submit', form_container).attr('disabled', 'disabled');
        $('.loader', form_container).show();

        $.ajax({
            type: 'post',
            url: '/wp-admin/admin-ajax.php',
            data: form_container.serialize() + '&action=dm_contact',
            success: function(response) {
                $('#dm_contact_form #message').html(response).slideDown();

                if (response.match('success') != null) {
                    form_container.slideUp();
                }

                $('.loader', form_container).hide();
                $('#submit', form_container).removeAttr('disabled');
            }
        });

        return false;
    });

    // CONTACT FORM ON CHANGE SUBJECT
    if ($('#dm_contact_form_1').length > 0 && $('#dm_contact_form_1 #subject').val() == 'startup-support') {
        $('#dm_contact_form_1 #order_number').closest('div').show();
    }

    $('#dm_contact_form_1').on('change', '#subject', function() {
        if ($(this).val() == 'startup-support') {
            $('#dm_contact_form_1 #order_number').closest('div').show();
        } else {
            $('#dm_contact_form_1 #order_number').closest('div').hide();
        }
    });

    // LOAD ASYNC
    load_script('//platform.twitter.com/widgets.js');
    load_script('//apis.google.com/js/plusone.js');
});