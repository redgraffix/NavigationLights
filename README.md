NavigationLights
================
Indicator Lights to show position on single page website

Usage
=====
This plugin works by detecting when an element with the class of ``` .section  ``` has scrolled into the browser window, then adds a class of ``` .nav_active ```  to the div with an Id of ``` #navlight* ``` . The ``` * ```  should be replaced with a number indicating the order of the section it represents. So the first ``` .section  ``` will be associated ``` #navlight1 ```, the second ``` .section  ``` will be associated ``` #navlight2 ```, and so on.

HTML Structure
==============
``` html
<div id="navlight1"></div> <div id="navlight2"></div> <div id="navlight3"></div>
<div class=".section"> some content </div>
<div class=".section"> some more content </div>
<div class=".section"> some other content </div>
```
