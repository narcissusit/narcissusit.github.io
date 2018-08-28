$(document).ready(function(){

	$('.grid-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		rows: 2,
		centerMode: true,
		responsive: [
		    {
		      breakpoint: 576,
		      settings: {
		        slidesToShow: 2,
		        rows: 3,
		        slidesToScroll: 1,
		      }
		    }
	    ]
	});

	$('.posts-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		prevArrow: '.prev',
		nextArrow: '.next',
		responsive: [
		    {
		      breakpoint: 960,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 576,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        vertical: true,
		      }
		    }
	    ]
	});

	$('.post:last-child .post-upper-title').after('<div class="dot"></div>');

	$('.post').on('mouseenter', function(){
		$('.post:last-child .dot').removeClass('active');
		var index = $(this).index();

		var width = $('.post').width();

		$('.post:last-child .dot').css('left', index*width);
		setTimeout(function(){
			$('.post:last-child .dot').addClass('active');
		}, 300);
	});

	$('.post').on('mouseleave', function(){
		setTimeout(function(){
			$('.post:last-child .dot').removeClass('active');
		},200);
	});

	$('.mobile-menu').on('click', function(){
		$('.header').toggleClass('open-mobile-menu');
		$('body').toggleClass('body-overflow');
	})

})