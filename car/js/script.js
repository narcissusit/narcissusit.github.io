$(document).ready(function(){
var owl = $('.owl-carousel');
owl.owlCarousel({
		autoplay:true,
		autoplayTimeout:3000,
		nav:true,
		navText: ["<p class='arrow'><</p>", "<p class='arrow'>></p>"],
		loop:true,
		dots:false,
		responsive:{
		0:{
		    items:1
		},
		960:{
			items:2
		}
		}
  });
	$('.mob_menu').click(function(){
		$(this).toggleClass('open');
		$('.main_menu').toggleClass('show');
	});
})