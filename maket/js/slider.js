var currentSlider = 0;

function currentSlide(slideIndex){
	if (!$('.dot:eq('+slideIndex+')').hasClass('active-dot')){
		setSlide(slideIndex);
		currentSlider = slideIndex;
	}
}

function setSlide(slideIndex){
	$('.image-slider .slide').fadeOut();
	$('.dot').removeClass('active-dot');
	$('.image-slider .slide:eq('+slideIndex+')').fadeIn();
	$('.dot:eq('+slideIndex+')').addClass('active-dot');
}

function nextSlide(slideIndex){
	currentSlider += slideIndex;
	if (currentSlider > $('.image-slider .slide').length - 1){
		currentSlider = 0;
	}
	if (currentSlider < 0){
		currentSlider = $('.image-slider .slide').length - 1;
	}
	setSlide(currentSlider);
}

$('.dot').click(function(){
	currentSlide($(this).index());
})

$('.full-slider .left-arrow').click(function(){
	nextSlide(-1);
});

$('.full-slider .right-arrow').click(function(){
	nextSlide(1);
});