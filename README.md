Jquery-Scrollup-Plugin
======================

A simple jquery plugin to enable scroll to top feature to any website. The plugin can be customized to position the element to bottom right or left, element color can be changed to dark or light shade,we can define the position where the element has to appear while scrolling and finally the location pixel to reach on clicking the element<br>

Check out the <a href="http://packetcode.com/apps/jquery_scroll/">LIVE DEMO</a>
<hr>

Installation
------------
Include the jquery.js,scrollup.js and scrollup.css in the head tags of the webpage
`````html
<link href="path/to/scrollup.css" rel="stylesheet">
<script src="path/to/jquery.js"> </script>
<script src="path/to/scrollup.js"></script>
`````
Minimal Setup
-------------
Include the following code in the head tags
`````javascript
$(function (){
    $(this).scrollUp();
 });
`````

Customized Setup
-----------------
you can set the options for the plugin as shown below

`````javascript
$(function () {
    $(this).scrollUp({
        color: "light", 		//make the background light or dark
        position: "right", 	    //position the element on bottom right or left
        verticalpixel:"200",     //set the position in y-axis to show the scroll element
        scrollto:"10px" 		// set the destination pixels from top
    });
});
`````

----------------------------------------------------------------
Developed by :Krishna Teja @www.packetcode.com
