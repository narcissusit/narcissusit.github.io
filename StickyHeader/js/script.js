var stickyHeader = document.getElementById('sticky-header');
var mainHeader = document.getElementById('main-header');
var mainMenu = document.getElementById('main-menu');
var content = document.getElementsByClassName('content');

window.onscroll = function() {
	if(window.pageYOffset >= 1){
		scrollMode("sticky-header-null", "main-header-null", "main-menu-fixed", 'content-position');
	}
	else{
		scrollMode('','','','');
	}
}

function scrollMode(stickyHeaderName, mainHeaderName, mainMenuName, contentName){
	stickyHeader.className = "sticky-header " + stickyHeaderName;
	mainHeader.className = "main-header " + mainHeaderName;
	mainMenu.className = "main-menu " + mainMenuName;
	for(var i=0; i< content.length; i++){
		content[i].className = "content " + contentName;
	}
}
