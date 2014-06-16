<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title></title>
<script language="javascript" type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
<script>
$(document).ready(function() {
	$(window).resize(function() {  
		fullHeight = $(window).height();
		headerHeight = $("#header").outerHeight();
		footerHeight = $("#footer").outerHeight();
		$("iframe.example, div.source").height((fullHeight-headerHeight-footerHeight-50)+"px");
	});
});
$(window).load(function() {
	$(window).resize();
});
function iframe_loaded() {
	$("a",$("iframe.example")[0].contentWindow.document).attr("target","_top");
}
</script>
<style>
html {
	font: 62.5%/1.4 Arial, Helvetica, sans-serif; }
body {
	font-size: 1.3em;
	padding: 0 10px;
	background-color: #b0e6ff; }
#header, #footer {
	width: 960px;
	margin: 0 auto; }
#header {
	background: transparent url(../../img/cssnewbie_v2_logo.png) no-repeat 10px 5px; }
#header p {
	font-size: 150%; }
h1, div.source {
	font-family: "Courier New", Courier, monospace; }
h1 {
	margin: 0; }
h1 a {
	display: block;
	width: 300px;
	text-decoration: none;
	margin: 0;
	padding: 52px 0 25px 215px;
	color: #253c93; }
h1 span {
	display: none; }
h2 {
	margin: 0; }
h2 a {
	font-size: 70%; }
a {
	color: #253c93; }
.example, .source {
	float: left; }
.example {
	width: 58%; }
.source {
	width: 40%; }
iframe.example,div.source {
	height: 500px;
	border: 1px solid #ccc;
	background-color: #fff; }
div.source {
	border-left: 0px none;
	padding: 0 0 0 1%;
	overflow: auto; }
div.source pre {
	white-space: pre-wrap;
	font-size: 12px; }
#footer {
 clear: both;
 min-height: 125px;
 text-align: center;
 padding-top: 1px; }
#footer p {
	font-size: 140%;
	line-height: 1.2;
	margin: .5em 0;}
#footer a {
	float: left;
	margin: .5em 1em 0 0; }
#bsap_1239784 {
	margin: .5em 0; }
</style>
</head>
<body>
<!-- BuySellAds.com Ad Code -->
<script type="text/javascript">
(function(){
  var bsa = document.createElement('script');
     bsa.type = 'text/javascript';
     bsa.async = true;
     bsa.src = '//s3.buysellads.com/ac/bsa.js';
  (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(bsa);
})();
</script>
<!-- END BuySellAds.com Ad Code -->
<div id="header">
	<h1><a href="../../index.html"><span>CSS Newbie</span> &lt;example /&gt;</a></h1>
</div>
<div id="content">
	<h2 class="example title">Live Example: </h2>
	<h2 class="source title">Source Code: <a href="http://www.cssnewbie.com/example/equal-heights/jquery.equalheights.js?source" id="save-source">(Save the Source)</a></h2>
	<iframe src="../../example_files/equal-heights/jquery.equalheights.js" class="example" onload="iframe_loaded()"></iframe>
	<div class="source"><pre>/**
 * Equal Heights Plugin
 * Equalize the heights of elements. Great for columns or any elements
 * that need to be the same size (floats, etc).
 * 
 * Version 1.0
 * Updated 12/109/2008
 *
 * Copyright (c) 2008 Rob Glazebrook (cssnewbie.com) 
 *
 * Usage: $(object).equalHeights([minHeight], [maxHeight]);
 * 
 * Example 1: $(&quot;.cols&quot;).equalHeights(); Sets all columns to the same height.
 * Example 2: $(&quot;.cols&quot;).equalHeights(400); Sets all cols to at least 400px tall.
 * Example 3: $(&quot;.cols&quot;).equalHeights(100,300); Cols are at least 100 but no more
 * than 300 pixels tall. Elements with too much content will gain a scrollbar.
 * 
 */

(function($) {
   $.fn.equalHeights = function(minHeight, maxHeight) {
      tallest = (minHeight) ? minHeight : 0;
      this.each(function() {
         if($(this).height() &gt; tallest) {
            tallest = $(this).height();
         }
      });
      if((maxHeight) &amp;&amp; tallest &gt; maxHeight) tallest = maxHeight;
      return this.each(function() {
         $(this).height(tallest).css(&quot;overflow&quot;,&quot;auto&quot;);
      });
   }
})(jQuery);</pre></div>
</div>
<div id="footer">
	<!-- BuySellAds.com Zone Code -->
	<div id="bsap_1239784" class="bsarocks bsap_3de9dd67d1e9d49a7cec8c1a10bdb917"></div>
	<!-- END BuySellAds.com Zone Code -->
</div>
<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
try {
var pageTracker = _gat._getTracker("UA-2285776-3");
pageTracker._trackPageview();
} catch(err) {}</script>

</body>
</html>