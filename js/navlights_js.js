/*
 *  NavigationLights
 *  Copyright (c) 2013 Jason Rodgers
 *  jquery plugin to indicate when a section of a webpage has scrolled into the viewport 
 *  Licensed under the MIT license
 *
 */
function navlights(){
  var DocScrollTop = $(document).scrollTop();
	$(".section").each(function(i) {
		var sectionOffsetTop = $(this).offset();
		var navnum = $(this).index();	
			if (sectionOffsetTop.top - ($(this).outerHeight(true)*.5) <= DocScrollTop 
			&& sectionOffsetTop.top + ($(this).outerHeight(true)*.5) >= DocScrollTop)
			{$("#navlight"+navnum+"").addClass("nav_active");}
		else {$("#navlight"+navnum+"").removeClass("nav_active");};
	});	
	};
$(document, window).on("ready, scroll", (function() {navlights();}));
