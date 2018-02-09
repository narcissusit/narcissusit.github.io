var menuIcon = document.getElementById('menu-icon');
var mainMenu = document.getElementById('main-menu');
menuIcon.addEventListener('click', function(){
	if(this.classList.contains('open')){
		this.classList.remove('open');
		mainMenu.classList.remove('open-menu-animate');
		setTimeout(function(){
			mainMenu.classList.remove('open-menu');
		}, 500);
		document.body.style.overflow = 'auto';
		mainMenu.style.overflow = 'visible';
	}else{
		this.classList.add('open');
		mainMenu.classList.add('open-menu');
		setTimeout(function(){
			mainMenu.classList.add('open-menu-animate');
		}, 20);
		document.body.style.overflow = 'hidden';
		mainMenu.style.overflow = 'auto';
	}
});

window.onscroll = function() {stickyHeader()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

