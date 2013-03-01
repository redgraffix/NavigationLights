NavigationLights
================
Indicator Lights to show position on single page website

Usage
=====
This plugin works by detecting when an element with the class of .section has scrolled at least half way into the browser window, then adds a class of .nav_active to the div with an Id of #navlight*. The * should be replaced with a number indicating the order of the section it represents. The plugin figures out the order of the sections by the section's index number, so no need to label them section1, section2, and so on.

You can style the elements however you see fit. Just be sure the .section takes up at least half the viewport or the plugin won't work properly. The #navlight1 , #navlight2, etc. are the indicators and The .nav_active class is your highlighted indicator.
