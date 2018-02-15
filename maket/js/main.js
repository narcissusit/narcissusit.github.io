$('.menu-icon').click(function(){
	mobileMenu();
})

function mobileMenu(){
	$('.menu-icon').toggleClass('open');
	$('.main-menu').toggleClass('active-main-menu');
	if($('.main-menu').hasClass('active-main-menu')){
		$('body').css({
			overflow: 'hidden'
		})
	} else{
		$('body').css({
			overflow: 'visible'
		})
	}
	$('.main-menu-link').click(function(){
		mobileMenu();
	});
}

$('.popup-button').click(function(){
	$('#popup').addClass('open-popup');
	$('body').css({
		overflow: 'hidden'
	});
});

$('.popup .close-button').click(function(){
	closePopup();
});

$(window).click(function(event){
	if ($(event.target).hasClass('popup')){
		closePopup();
	}
})

function closePopup(){
	$('#popup').removeClass('open-popup');
	$('body').css({
		overflow: 'auto'
	});
}
