jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';
	let carousel = jQuery('#steps');
		
	carousel.owlCarousel({
		items: 2,
		autoplay: false,
		autoplayTimeout: 4000,
		autoplayHoverPause: false,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: false,
		navText: ['<i class="fa fa-regular fa-chevron-left"></i>', '<i class="fa fa-regular fa-chevron-right"></i>'],
		dots: false,
		mouseDrag: true,
		margin: 30,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 2,
				dots: true,
				nav: false,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000
			},
			479:{
				items: 2,
				dots: true,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000
			},
			767:{
				items: 2,
				dots: true,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000
			},
			991:{
				items: 2,
				dots: true,
				mouseDrag: true,
				autoplay: false,
				smartSpeed: 1000
			},
			1099:{
				items: 2,
				dots: true,
				mouseDrag: true,
				nav: true,
				autoplay: false
			},
			
		}
	});
});