$(document).ready(function(){
	$('.to_top').fadeOut();
	$('.menu_icon').click(function(){
		$(this).toggleClass('open');
		$('.main_menu').toggleClass('show');
		$('.user_menu').toggleClass('show');
		$('.social_networks').toggleClass('show');
		$('body').toggleClass('scroll');
	});
	$('.main_menu').click(function(){
		$('.menu_icon').toggleClass('open');
		$(this).toggleClass('show');
		$('.user_menu').toggleClass('show');
		$('.social_networks').toggleClass('show');
		$('body').toggleClass('scroll');
	});

	$('#login').click(function (event) {
		event.preventDefault();
	$('.modal_form').fadeIn();
	$('body').toggleClass('scroll');
	});

	$('.sign_in').submit(function(){
	$('.modal_form').fadeOut();
	$('body').toggleClass('scroll');
	return false;
	});

	var modal = document.getElementById('modal');

	window.onclick = function(event) {
	    if (event.target == modal) {
	    	$('.modal_form').fadeOut();
	    	$('body').toggleClass('scroll');
	    }
	}	

	$(window).scroll(function() {
		if($(this).scrollTop() > 0) {
			$('.to_top').fadeIn();
			$('header').addClass('fade');
		} else {
			$('.to_top').fadeOut();
			$('header').removeClass('fade');
		}
	});
	$(".to_top").click(function(){
		$('body,html').animate({scrollTop: 0}, 400); 
		return false;   
	});
});

	var slideIndex=1;
	showSlides(slideIndex);

	function plusSlides(n){
		showSlides(slideIndex += n);
	}

	function currentSlide(n){
		showSlides(slideIndex = n);
	}

	function showSlides(n){
		var i;
		var slides = document.getElementsByClassName("slide");
		var dots = document.getElementsByClassName("dot");

		if(n > slides.length){
			slideIndex = 1;
		}
		if(n < 1){
			slideIndex = slides.length;
		}
		for(i=0; i<slides.length; i++){
			slides[i].style.display = "none";
		}
		for(i=0; i < dots.length; i++){
			dots[i].className = dots[i].className.replace("active","");
		}
		 slides[slideIndex-1].style.display = "block";
		 dots[slideIndex-1].className+= " active";
	}	
	