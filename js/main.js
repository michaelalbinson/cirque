"use strict";
var global_fixed_to_top_position = $("#head").offsetTop;
window.addEventListener("scroll", function() {
	const fixedName = 'fixed-to-top';
	var elementTarget = $("#head");
	if (window.scrollY > global_fixed_to_top_position) {
		if (!elementTarget.hasClass(fixedName))
		elementTarget.addClass(fixedName);
	}
	else {
		if (elementTarget.hasClass(fixedName))
			elementTarget.removeClass('fixed-to-top');
	}
});