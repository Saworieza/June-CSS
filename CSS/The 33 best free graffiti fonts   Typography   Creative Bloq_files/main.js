/*
 *
 * THESE SHOULD GO IN A CLASS
 *
 */

function viewport() {
  var e = window
          , a = 'inner';
  if (!('innerWidth' in window))
  {
    a = 'client';
    e = document.documentElement || document.body;
  }
  return {width: e[ a + 'Width' ], height: e[ a + 'Height' ]}
}

function manageTakeovers() {
  var body = document.getElementsByTagName('body')[0];

  var style = body.currentStyle || window.getComputedStyle(body, false);

  var vp = viewport();

  //mirrors media query vars in ../scss/_variables.scss
  var bpTablet = 768;
  var bpDesktopA = 1574000;

  //manage-takeover class in ../scss/_dfp.scss
  if (style.backgroundImage != 'none' && vp.width < bpDesktopA && vp.width > bpTablet) {
    if (!$('.main_nav').hasClass('manage-takeover'))
      $('.main_nav').addClass('manage-takeover');
  } else {
    if ($('.main_nav').hasClass('manage-takeover'))
      $('.main_nav').removeClass('manage-takeover');
  }
}

jQuery(document).ready(function($) {
  manageTakeovers();
  // Fix CSS transitions
  // @link http://css-tricks.com/transitions-only-after-page-load/
  $(window).load(function() {
    $('body').removeClass('preload');
    manageTakeovers();

    if (!$('body').css('background-image') == 'none') {
      $('.main_nav').css('width', '998px');
      $('.main_nav').css('margin', 'auto');
    }
  });

  // SuperNav blocks
  $.fn.hideMenus = function(e) {
    var menu = $('.superblock:not(.closed)');

    if ($(this).is(menu)) {
      return false; // if trying to open current menu, don't close it
    }

    if (!menu.is(e.target) && menu.has(e.target).length === 0) {
      menu.parent().find('.active').toggleClass('active');
      menu.toggleClass('closed');
    }
  }

  jQuery('.expand').on('click', function(e) {
    e.preventDefault();
    // Stop the event from bubbling up to the document
    e.stopPropagation();

    var id = $(this).attr('href');
    $(id).hideMenus(e); // hide other menus

    $(this).toggleClass('active');
    $(id).toggleClass('closed');
  });

  jQuery(document).on('click', function(e) {
    $().hideMenus(e); // clicked away
  });

  // jScrollPane, styled scrollbars
  $.fn.scrollBars = function() {
    var elm = $('.scroll-pane');
    var sbars = elm.jScrollPane();
    var respWidth = 970; // ResponsiveWidth (px)
    var width = $(window).width();


    if (width > respWidth) {
      elm.jScrollPane(); // add scroll-pane
    }
    else if (width < respWidth) {
      var api = sbars.data('jsp');
      api.destroy(); // removes scroll-pane
    }
  }

  var iOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);

  if (!iOS) {
    $(window).load(function() {
      $(this).scrollBars()
    });
    $(window).resize(function() {

      $(this).scrollBars()
      manageTakeovers();

    });
  }

  /*
   * forms
   */

  //create a new instance of the form module
  var forms = new Form();

  //checkboxes
  $('label.option').change(function() {
    forms.updateCheckboxGroup($(this));
  });

  if (jQuery('body').hasClass('page-node')) {
  
    // If we have a user loaded then attempt to load the comment form
    if (!jQuery.cookie('FUTURE_USER') || jQuery.cookie('FUTURE_USER') > 0) {
      if (jQuery('#comments-form').length > 0) {
        var comment_cnt = jQuery('#comments-form');
        comment_cnt.addClass(ajax_loader_class);
        jQuery.getJSON('/future/comment/' + jQuery('#article-id').val() + '?ajax=true&t=' + Math.round(new Date().getTime()), function(data, status) {
          if (status == ajax_success) {
            if (data.content != '') {
              comment_cnt.html(data.content);
            }
          }
          comment_cnt.removeClass(ajax_loader_class);
        });
      }
    }

    // Attempt to load the comments list
    if (jQuery('#comments-form.has-comments').length > 0) {
        var comment_list = $('#comments-list');
        var nid = $('#article-id').val();
        
        //AJAX call to get first page of comments (no fail action)
        ajaxGetComments(nid).done(function (data) {
            //add comments to page
            d = $(innerShiv(data.content, true));
            comment_list.html('');
            comment_list.append(d);
            
            //Add 'view more' option if needed
            var pager = $('#comments .pager');
            var num_pages = pager.find('.pager-item, .pager-current').length;
            if (num_pages > 1) {
              var load_tracker = 'loaded-1';
              var load_total = 'total-' + num_pages;
              var ajax_loader_html = '<div class="comment-ctrl"><a class="ajax-pager throbber ' + load_tracker + ' ' + load_total + '" href="#" >+ Comments</a></div>';
              //remove page
              pager.parent().after(ajax_loader_html).remove();
              
              var ajax_loader = $('#comments-list .comment-ctrl');
              
              $('#comments .ajax-pager').click(function() {
                  var load_tracker_old = load_tracker;
                  var tracker = load_tracker.split('-');
                  var old_page = parseInt(tracker[1]);
                  var new_page = old_page + 1;
                  var loaded = load_total.split('-');
                  var loaded_pages = parseInt(loaded[1]);
                  var query = '&page=' + tracker[1];
                  load_tracker = 'loaded-' + (new_page);
                  //update class name
                  $(this).removeClass(load_tracker_old).addClass(load_tracker);
                  
                  //make ajax call
                  ajaxGetComments(nid,query).done(function (data) {
                      //add comments to page
                      var d = $(data.content);
                      //tidy received content
                      var d_clean = d.find('.content').html();                      
                      //add to DOM
                      ajax_loader.before(d_clean);
                      //remove page
                      $('#comments .item-list').remove();
                      //Remove Ajax loader when all comments loaded
                      if (new_page === loaded_pages) {
                        ajax_loader.remove();
                      }
                  });
                  return false;
                });
            }
        });
    }
    if (jQuery('.shorturl-button').length > 0) {
      jQuery('.shorturl-button input').focus(function() {
        this.select();
      });
    }

    if (jQuery('.fullscreen').length > 0) {
      // Insert lighbox code
      jQuery('.fullscreen').colorbox({
        opacity: 0.75
      });
    }

    jQuery('.shorturl-button').each(function() {
      jQuery('.shorturl-link', this).click(function() {
        jQuery(this).next().show();
        jQuery(this).next().find('input').focus();
      });
    });

    jQuery('.shorturl-box').each(function() {
      jQuery('.shorturl-close', this).click(function() {
        jQuery('.shorturl-box').hide();
      });
    });

    if (jQuery('.futurereveal').length > 0)
    {
      jQuery('.futurereveal').children().hide();

      var futurerevealbtn = jQuery('<p>').addClass('futurereveal');
      var futurehidebtn = futurerevealbtn.clone();

      futurerevealbtn.addClass('show').click(function() {
        id = jQuery(this).attr('rel');
        jQuery('#' + id).children().show();
        jQuery('#' + id + ' .show').hide();
      });

      futurehidebtn.addClass('hide').click(function() {
        id = jQuery(this).attr('rel');
        jQuery('#' + id).children().hide();
        jQuery('#' + id + ' .show').show();
      });

      jQuery('.futurereveal').each(function() {
        html = jQuery(this).html();
        values = html.match(/\<\!\-\-futurereveal (show|hide) .*\-\-\>/gi);
        for (i = 0; i < values.length; i++)
        {
          value = values[i];
          id = value.match(/id="[a-z0-9\-]+"/gi);
          if (id)
          {
            id = id[0].match(/"[a-z0-9\-]+"/gi);
            id = id[0].replace(/"/g, '');
            title = value.match(/title="[a-z0-9\- ]+"/gi);
            if (title)
            {
              title = title[0].match(/"[a-z0-9\- ]+"/gi);
              title = title[0].replace(/"/g, '');
            }
            else {
              title = ''
            }
          }
          if (i == 0)
          {
            futurerevealbtn.attr('rel', id);
            futurerevealbtn.text(title);
          }
          else
          {
            futurehidebtn.attr('rel', id);
            futurehidebtn.text(title);
          }
        }
        jQuery(this).prepend(futurerevealbtn.clone(true));
        jQuery(this).append(futurehidebtn.clone(true));
      });
      jQuery('.futurereveal .show').show();
    }

    if (jQuery('#magazine-information').length > 0) {
      jQuery('#magazine-information article').append("<p class='mag-hide'>Hide this content</p>");
      jQuery('#magazine-information').hide();
    }
    jQuery('.mag-info').on('click', function(e) {
      e.preventDefault();
      // Stop the event from bubbling up to the document
      e.stopPropagation();

      jQuery('#magazine-information').toggle();
    });
    jQuery('.mag-hide').click(function() {
      jQuery('#magazine-information').toggle();
    });
  }
    
    //Ajax call for article comments
    function ajaxGetComments(id, page, url) {
      var url = url || '/future/comments/';
      var page = page || '';
      var arguments = '?ajax=true&t=' + Math.round(new Date().getTime()) + page ;
      
      return jQuery.getJSON(url + id + arguments);
    }
    
    //Carousel widget controls
    if (jQuery('.carousel-widget').length > 0) {
    //allow for multiple widgets on a page
        jQuery('.carousel-widget').each(function () {
            //Store DOM element in a variable
            var mag_widget = jQuery(this);
            //Count number of items (plus two cloned items)
            var no_items = mag_widget.find('.item').length + 2;
            //set autoplay
            var autoplay = (no_items > 3 ? true : false);
            //get calculated width of container 
            var conatiner_width = widthCalc(mag_widget.find('.item:first-child'), no_items);
            //get height of tallest .item
            var item_height = tallestElement(mag_widget.find('.item'));
            //get height of title element
            var title_height = mag_widget.find('h4.std-hdr').outerHeight(true);
            //calc parent height
            var parent_height = title_height + item_height;

            //set height of widget container and width of div.items
            mag_widget.css('height', parent_height + 'px').find('.items').css('width', conatiner_width + 'px');

            //set plugin options
            mag_widget.scrollable({
                circular: true,
                keyboard: false
            }).autoscroll({
                autoplay: autoplay,
                interval: 5000
            }).navigator({
                navi: '.items-nav'
            });

            //enable controls
            mag_widget.find('.carousel-arrow').show();
        });
    }

    //Calc total width based on single DOM element 
    function widthCalc(item, no_items) {
        var calculated_width = 0;
        //get width of dom eletment
        var item_wdith = item.outerWidth(true);

        calculated_width = (item_wdith * no_items);

        return calculated_width;
    }

    //Return height of tallest DOM element
    function tallestElement(items) {
        var tallest = 0;
        //loop through each item and compare outer height of objects
        items.each(function () {
            var h = $(this).outerHeight(true);
            tallest = h > tallest ? h : tallest;
        });
        return tallest;
    }

    //return current pathname 
    function getCurrentPathname() {
        var uri = window.location.pathname;
        return uri;
    }

    //if on article listing page call above function
    if ($('.article-listing-section').length) {
      setTotalShares();//in global.js
    }
  
  // If the page has a gallery the set it up
  if (jQuery('#gallery-viewer').length > 0) {
    var gallery = jQuery('#gallery-viewer').scrollable({
      circular: false,
      keyboard: false
    });

    var api = gallery.scrollable();

    if (jQuery('#gallery-viewer .gallery-item').length <= 4) {
      jQuery('#gallery-viewer .items-nav a').addClass('disabled');
    }

    var gitem = jQuery('#gallery-viewer').find('.gallery-item:first-child > a');

    updateGalleryViewport(gitem[0], api, 0);

    jQuery('#gallery-viewer').find('.gallery-item > a').click(function() {

      max_size = api.getSize();
      new_index = jQuery('#gallery-viewer .gallery-item > a').index(jQuery(this));
      gitem = jQuery('#gallery-viewer').find('.gallery-item:eq(' + new_index + ') a');
      updateGalleryViewport(this, api, new_index);

      return false;
    });

    jQuery('#gallery-viewport').find('.viewport-nav > a').click(function() {

      nav_item = jQuery(this);

      if (!nav_item.hasClass('disabled'))
      {
        max_size = jQuery('#gallery-viewer .gallery-item').length;
        current_index = jQuery('#gallery-viewer .gallery-item > a').index(jQuery('#gallery-viewer .gallery-item > a.active'));

        new_index = (nav_item.hasClass('viewport-prev')) ? current_index - 1 : current_index + 1;

        if (current_index >= 0 || (current_index <= max_size))
        {
          index = (api.getIndex() * 4);

          if (new_index >= index + 4 || new_index < index)
          {
            seek_index = Math.floor((new_index / 4));
            api.seekTo(seek_index);
          }
          gitem = jQuery('#gallery-viewer').find('.gallery-item:eq(' + new_index + ') a');
          updateGalleryViewport(gitem, api, new_index);
        }
      }

    });

    jQuery('body').keydown(function(event) {
      key = event.keyCode;
      if (key == 37 || key == 39)
      {
        index = jQuery('#gallery-viewer .gallery-item > a').index(jQuery('#gallery-viewer .gallery-item > a.active'));

        if (index >= 0)
        {
          if (key == 37) {
            if (index - 1 >= 0) {
              jQuery('#gallery-viewport a.viewport-prev').click();
            }
          }
          else {
            if (index + 1 <= jQuery('#gallery-viewer .gallery-item').length) {
              jQuery('#gallery-viewport a.viewport-next').click();
            }
          }
        }
      }
    });
  }
});

// if inline cta found then move it to the place holder
var inline_cta = $('.inline-cta');
if (inline_cta.length > 0) {
    $('.future-inline-cta').html(inline_cta);
}