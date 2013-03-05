NavigationLights
================
Indicator to show which section you have scrolled to when viewing a long single page website.

Usage
=====

The sections of the webpage you'd like to check if they have scrolled into the viewport should be labeled with a class of ``` .section  ```. The indicators signifying each ``` .section  ``` should be labeled with an Id of ``` #navlight1 ```, ``` #navlight2 ```, and so on depending on the number of sections you have.

This plugin works by detecting when an element with the class of ``` .section  ``` has scrolled into the browser window, then adds a class of ``` .nav_active ```  to the div ``` #navlight* ``` that is associated that ``` .section  ``` .  The first ``` .section  ``` will be associated ``` #navlight1 ```, the second ``` .section  ``` will be associated ``` #navlight2 ```, etc.


HTML Structure
==============
In it's most basic form, your HTML should look something like this.
``` html
<div id="navlight1"></div> <div id="navlight2"></div> <div id="navlight3"></div>
<div class=".section"> some content </div>
<div class=".section"> some more content </div>
<div class=".section"> some other content </div>
```
Elements may be styled however you see fit, just be sure the ``` .section ``` is fills up most of the screen otherwise plugin will not work properly.
