(function () {
    window.widget = window.widget || {};

    widget.listen = function(evnt, elem, func) {
        if (elem.addEventListener)  // W3C DOM
            elem.addEventListener(evnt,func,false);
        else if (elem.attachEvent) { // IE DOM
            var r = elem.attachEvent("on"+evnt, func);
            return r;
        }else {
            elem['on' + evnt] = func;
        }
    }

    widget.getScrollTop = function(){
        if(typeof pageYOffset!= 'undefined'){
            //most browsers except IE before #9
            return pageYOffset;
        }
        else{
            var B= document.body; //IE 'quirks'
            var D= document.documentElement; //IE with doctype
            D= (D.clientHeight)? D: B;
            return D.scrollTop;
        }
    };

    widget.getScrollLeft = function(){
        if(typeof pageXOffset!= 'undefined'){
            //most browsers except IE before #9
            return pageXOffset;
        }
        else{
            var B= document.body; //IE 'quirks'
            var D= document.documentElement; //IE with doctype
            D= (D.clientWidth)? D: B;
            return D.scrollLeft;
        }
    }

    widget.execFuncOnWidgets = function(func){
        var elements = null;
        if(typeof(document.getElementsByClassName) === 'function'){
            elements = document.getElementsByClassName("sstk_widget");
        }
        else{
            elements = document.querySelectorAll('.sstk_widget');
        }

        for(var i=0; i<_wdata.length; i++){
            var oldWidgetElementId = 'sstk_widget_' + _wdata[i].widget_id;
            var element = document.getElementById(oldWidgetElementId);
            if(typeof(element) === 'undefined' || element == null){// new embed code
                for(var j=0; j< elements.length; j++){
                    var w_id = elements[j].getAttribute("data-id");
                    if(_wdata[i].widget_id == w_id){
                        func(elements[j], _wdata[i]);
                        break;
                    }
                }
            }
            else{// old embed code
                func(element, _wdata[i]);
            }
        }
    };

    // http://blog.fedecarg.com/2011/07/12/javascript-asynchronous-script-loading-and-lazy-loading/
    widget.getScript = function (url, callback) {
        var script = document.createElement('script'); script.type = 'text/javascript'; script.async = true;
        script.src = document.location.protocol + url;
        var firstScriptTag = document.getElementsByTagName('script')[0];
        script.onload = script.onreadystatechange = function () {
            if (!(this.readyState && this.readyState !== "complete" && this.readyState !== "loaded")) {
                this.onload = this.onreadystatechange = null;
                callback();
            }
        };
        firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
    };

    widget.init = function () {
        if(widget.loaded){
            return;
        }

        if (typeof (_wdata) === 'undefined') {
            return;
        }
        widget.loaded = true;

        function createGUID(){
            var timeStamp = new Date().getTime();
            return 'xxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                return v.toString(16);
            }) +  timeStamp;
        }

        function InsertWidget(element, data){
            var full_url = document.location.protocol;

            var sid = data.widget_id + "_" + createGUID();

            if(data.src.indexOf("?") != -1){
                full_url += data.src + "&url=" + encodeURIComponent(data.url) + "&title=" + encodeURIComponent(document.title) + "&sid=" + sid;
            }
            else{
                full_url += data.src + "?url=" + encodeURIComponent(data.url) + "&title=" + encodeURIComponent(document.title) + "&sid=" + sid;
            }

            var props = {
                width: data.width,
                    height: data.height,
                    allowtransparency: true,
                    frameborder: 0,
                    hspace: 0,
                    vspace: 0,
                    marginwidth: 0,
                    marginheight: 0,
                    scrolling: 'no',
                    style: { border: "0px solid #fff"}
            };

            if (data.border) {
                props.style.border =  "1px solid #ccc";
                props.style.width = (data.width - 2) + "px";
                props.style.height = (data.height - 2) + "px";
            }

            var partner_protocol = data.url.split("://")[0];

            var w_tmp = document.createElement("a");
            w_tmp.href =  data.src;

            var recipient = partner_protocol + "://" + w_tmp.hostname + ((w_tmp.port != "" && w_tmp.port != "80") ? (":" + w_tmp.port) : "");

            var remote_host = "https:"; // we will hardcoded because o partner_protocol + ":";

            if(data.cdn_prefix == undefined){
                remote_host += "//d3qrz9uuaxc8ej.cloudfront.net";
            } else if(data.cdn_prefix == ""){
                remote_host = recipient;
            }
            else{
                remote_host += data.cdn_prefix;
            }

            //console.log("remote host: " + remote_host);

            widget.socket = new widget.easyXDM.Socket({
                remote: remote_host + "/content/html/read.cookie.html#" + encodeURIComponent(full_url),
                recipient: recipient,
                container: element,
                props: props,
                onLoad: function() {
                    widget.execFuncOnWidgets(window.widget.set_widget_load_pixel);
                }
            });

            element.getElementsByTagName("a")[0].style.fontSize = "12px";
            element.getElementsByTagName("a")[0].style.lineHeight = "40px";

            if(data.height < 250){
                element.getElementsByTagName("a")[0].style.display = "none";
            }
            element.setAttribute('data-inserted', 'true');
            element.setAttribute('data-sid', sid);
            element.setAttribute('data-src', data.src);
        }

        widget.execFuncOnWidgets(InsertWidget);
    };

    widget.set_widget_load_pixel = function(element) {
        if(element.getAttribute('data-inserted') != 'true')
            return;

        var data = window.widget.get_position_data(element);
        data.action = "iframe_load";
        //console.log("message posted from iframe_load event")
        window.widget.CreateTrackingPixel(element, data);
        //console.log("iframe_load_event");
    }

    widget.trigger_view_event_if_needed = function(element){
        if(element.getAttribute('data-inserted') != 'true')
            return;

        if(element.getAttribute("data-sid-sent") == "true")
            return;

        var data = window.widget.get_position_data(element);
        var screenScrollTop = widget.getScrollTop();// document.body.scrollTop;
        var screenScrollLeft = widget.getScrollLeft();// document.body.scrollLeft;

        //if screen size is twice as smaller then widget size then it can't fit
        if(data.screen_h * data.screen_w * 2 < data.height * data.width)
            return;

        //if more then half widget is positioned bellow the visible area
        if(data.screen_h + screenScrollTop <= data.y + (data.height / 2 ))
            return;

        //if more then half widget is positioned above the visible area
        if(screenScrollTop >= data.y + (data.height / 2))
            return;

        //if more then half widget is positioned right of the visible area
        if(data.screen_w + screenScrollLeft <= data.x + (data.width / 2))
            return;

        //if more then half widget is positioned left of the visible area
        if(screenScrollLeft >= data.x + (data.width / 2))
            return;

        data.action = "view";

        //console.log("message posted from view event")
        window.widget.CreateTrackingPixel(element, data);
        element.setAttribute('data-sid-sent', 'true');
        //console.log("sent");
    }

    widget.CreateTrackingPixel = function(element, data){
        var sid = element.getAttribute("data-sid");
        data.sid = sid;
        widget.socket.postMessage(encodeURIComponent(JSON.stringify(data)));
    }

    widget.get_position_data = function(element) {
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        var windowWidth = window.innerWidth || document.documentElement.clientWidth;

        var docHeight = document.body.scrollHeight;
        var docWidth  =  document.body.scrollWidth;

        var topX = element.offsetLeft;
        var topY = element.offsetTop;

        var viewport = Math.ceil(topY / windowHeight);
        if(viewport == 0)
            viewport = 1;

        return {
            doc_h: docHeight,
            doc_w: docWidth,
            screen_h: windowHeight,
            screen_w: windowWidth,
            x: topX,
            y: topY,
            vp: viewport,
            width: element.offsetWidth,
            height: element.offsetHeight
        }
    }

    widget.listen("load", window, function(){
        if (typeof (_wdata) === 'undefined') {
            return;
        }
        setTimeout(function(){
            widget.execFuncOnWidgets(window.widget.trigger_view_event_if_needed);
        }, 600);

    });

    var timer = null;
    widget.listen("scroll", window, function(){
        clearTimeout(timer);
        timer = setTimeout(function(){
            widget.execFuncOnWidgets(window.widget.trigger_view_event_if_needed);
        }, 600);
    });

    var reqSriptCount = 2;
    function scriptLoadedHandler(script) {
        //console.log(script + " loaded");
        reqSriptCount--;
        if (reqSriptCount == 0) {
            //init on window ready
            widget.init();
        }
    }

    if (typeof (easyXDM) === 'undefined') {
        widget.getScript('//d3qrz9uuaxc8ej.cloudfront.net/content/js/easyXDM.dyn.min.js', function () {
            widget.easyXDM = widget.easyXDM || easyXDM.noConflict("widget");
            scriptLoadedHandler('easyXDM');
        });
    }
    else {
        scriptLoadedHandler('existing easyXDM');
        widget.easyXDM = widget.easyXDM || easyXDM.noConflict("widget");
    }
    if (typeof (JSON) === 'undefined') {
        widget.getScript('//cdnjs.cloudflare.com/ajax/libs/json2/20130526/json2.min.js', function () {
            scriptLoadedHandler('JSON');
        });
    }
    else {
        scriptLoadedHandler('existing JSON');
    }

})();