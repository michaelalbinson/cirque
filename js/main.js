"use strict";
$(document).ready(function() {setTimeout(function(){$('.loading').fadeOut()}, 2000)});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

function toggleMenu() {
	$('#mobile-menu').toggle();
	$('.alt-menu').toggle();
}