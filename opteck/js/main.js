$('.try-button').click(function(){
	var height = $('#register').offset().top;
	$('body,html').animate({scrollTop: height}, 400); 
});