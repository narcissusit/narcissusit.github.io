var userName = document.getElementById('user-name');
var mail = document.getElementById('user-mail');
var autoPhone = document.getElementById('user-auto-phone');
var phone = document.getElementById('user-phone');
var country = document.getElementById('user-country');

phone.oninput = function () {
	if (this.value.length > 9) {
		this.value = this.value.slice(0,9); 
	}
}

var registerBtn = document.getElementById('register-button');
		
registerBtn.addEventListener('click', function(e){
	e.preventDefault();
	validate();
})

function validate(){
	var patternPhone = /^\d+$/;
	var patternName =/^([a-z]+)$/i;
	var patternMail = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
	if (userName.value.length < 3 || userName.value.search(patternName) != 0){
		userName.classList.add('not-valid');
	}else{
		userName.classList.remove('not-valid');
	}
	if (phone.value.length != 9 || phone.value.search(patternPhone) != 0){
		phone.classList.add('not-valid');
		autoPhone.classList.add('not-valid');
	}else{
		phone.classList.remove('not-valid');
		autoPhone.classList.remove('not-valid');
	}
	if(mail.value.search(patternMail) != 0){
		mail.classList.add('not-valid');
	}else{
		mail.classList.remove('not-valid');
	}
	if(country.selectedIndex == 0){
		country.classList.add('not-valid');
	} else{
		country.classList.remove('not-valid');
	}
}