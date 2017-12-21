var mainMenu = document.getElementById('main-menu');
var content = document.getElementById('content');
var mainMenuPositionTop = mainMenu.offsetTop;

window.onscroll = function() {
	if(window.pageYOffset >= mainMenuPositionTop){
		mainMenu.className = "main-menu main-menu-fixed";
		content.className = "content content-position";
	}
	else{
		mainMenu.className = "main-menu";
		content.className = "content";
	}
}