var carouselBlock = $('#carousel-block');
var carouselContainer = $('.mini-slider-field');
var currentSlideCar = 1;
var currentSlideNumber = 1;
var marginUser = 0;
var mar = 0;
$(window).resize(function(){
	setCarousel();
});

function setCarousel(){
	marginUser = carouselContainer.width();
	if($(window).width() < 640){
		currentSlideNumber = 1;
		mar = 0;
	} else if($(window).width() < 960){
		currentSlideNumber = 2;
		mar = 20;
	} else if($(window).width() < 1200){
		currentSlideNumber = 3;
		mar = 20;
	} else {
		currentSlideNumber = 3;
		mar = 35;
	}
	carouselBlock.css({
		width: carouselContainer.length/currentSlideNumber*100+'%'
	}) 
	nullPosition();
}

setCarousel();

function nullPosition(){
	currentSlideCar = currentSlideNumber;
	marginUser = carouselContainer.width() + mar;
	$('.mini-slider-block').css({
		marginLeft: 0
	});
}

$('.mini-slider .right-arrow').click(function(){
	$('.mini-slider-block').css({
		marginLeft: '-='+marginUser
	});
	if (currentSlideCar++ == carouselContainer.length) {
        currentSlideCar = currentSlideNumber;
       	nullPosition();
    } 
});

$('.mini-slider .left-arrow').click(function(){
	$('.mini-slider-block').css({
		marginLeft: '+='+marginUser
	})
	if (currentSlideCar-- == currentSlideNumber) {
		currentSlideCar = carouselContainer.length;
		lastPosition();
    }
});

function lastPosition(){
	marginUser = carouselBlock.width() - (carouselContainer.width()+mar)*currentSlideNumber;
	$('.mini-slider-block').css({
		marginLeft: -marginUser
	});
	marginUser = carouselContainer.width() + mar;
}