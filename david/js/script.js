$(document).ready(function(){
	$('.mob_menu').click(function(){
		$(this).toggleClass('open');
		$('.main_menu').toggleClass('show');
		$('body').toggleClass('scroll');
	});
	$('.main_menu').click(function(){
		$('.mob_menu').toggleClass('open');
		$(this).toggleClass('show');
		$('body').toggleClass('scroll');
	});
	$(".main_menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top - 30;
		$('body,html').animate({scrollTop: top}, 1000);
	});
	$('.slider').owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 8000,
		responsive: {
			820: {
				nav: true,
			}
		}
	});
	$('.slider .owl-prev').html('<svg width="22.5px" height="32.5px"><path fill-rule="evenodd" stroke="rgb(99, 185, 69)" stroke-width="2px" stroke-linecap="butt" stroke-linejoin="miter" fill="none" d="M18.500,3.049 L4.597,15.500 L18.500,27.951 "/></svg>');
	$('.slider .owl-next').html('<svg width="22.5px" height="32.5px"><path fill-rule="evenodd"  stroke="rgb(99, 185, 69)" stroke-width="2px" stroke-linecap="butt" stroke-linejoin="miter" fill="none" d="M2.500,3.049 L16.402,15.500 L2.500,27.951 "/></svg>');
});