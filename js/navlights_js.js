/*
 *  NavigationLights
 *  Copyright (c) 2013 Jason Rodgers
 *  jquery plugin to indicate when a section of a webpage has scrolled into the viewport 
 *  Licensed under the MIT license
 *
 */
function NavLights() {
	var sectId = 0;
	$(".section").each(function() {
		sectId = sectId+1;
		$(this).data("sectId", sectId);
		});
	$(document).scroll(function() {
		var DocScrollTop = $(document).scrollTop();
			$(".section").each(function() {
				var sectionOffsetTop = $(this).offset();		
				if (sectionOffsetTop.top - ($(this).outerHeight(true)*.1) <= DocScrollTop && sectionOffsetTop.top + ($(this).outerHeight(true)*.9) >= DocScrollTop){$("#navlight"+$(this).data("sectId")+"").addClass("nav_active");}
				else {$("#navlight"+$(this).data("sectId")+"").removeClass("nav_active");};	
			});	
		});
};
$(NavLights);	
