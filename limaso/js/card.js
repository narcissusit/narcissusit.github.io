var cvv = document.getElementById('cvv');
var payButton = document.getElementById('card-pay');
var userCardName = document.getElementById('user-card-name');

cvv.oninput = function () {
	if (this.value.length > 3) {
		this.value = this.value.slice(0,3); 
	}
}

var cardNumber = document.getElementsByClassName('card-number-input');
var cardSectionFocus = 0;

for(var i = 0; i < 4; i++){
	cardNumber[i].addEventListener('input', function(){
		var numberLength = this.value.length;
		if (numberLength > 4) {
			for(var j = 0; j < 4; j++){
				cardNumber[j].value = cardNumber[j].value.slice(0,4);
			} 
		}
		if(numberLength == 4 && cardSectionFocus < 3){
			cardSectionFocus++;
			cardNumber[cardSectionFocus].focus();
		}
	})
}

function appendSelect(){
	var month = document.getElementById('month-card');
	var year = document.getElementById('year-card');
	for (var i = 1; i <= 12; i++){
		var inner = i;
		if(inner<10){
			inner = '0'+i;
		}
		setOption(i, inner, month);
	}
	for (var i = 2018; i <= 2022; i++){
		setOption(i, i, year);
	}
}

function setOption(valueElem, innerElem, select){
	var option = document.createElement("option");
    option.value = valueElem;
    option.innerHTML = innerElem;
    select.appendChild(option);
}

appendSelect();

payButton.addEventListener('click', function(e){
	e.preventDefault();
	validate();
})

function validate(){
	var isValid = true;
	var cardNumberCount = 0;
	var cardNumberValue = '';
	var patternNumber = /^\d+$/;
	var patternName =/^([a-z]+)$/i;
	for(var j = 0; j < 4; j++){
		cardNumberCount += cardNumber[j].value.length;
		cardNumberValue += cardNumber[j].value;
	}
	if (cardNumberCount != 16 || cardNumberValue.search(patternNumber) != 0){
		for(var i = 0; i < 4; i++){
			cardNumber[i].classList.add('not-valid');
			isValid = false;
		}
	}else{
		for(var i = 0; i < 4; i++){
			cardNumber[i].classList.remove('not-valid');
		}
	}
	if (cvv.value.length != 3 || cvv.value.search(patternNumber) != 0){
		cvv.classList.add('not-valid');
		isValid = false;
	}else{
		cvv.classList.remove('not-valid');
	}
	if(userCardName.value.length < 4 || userCardName.value.search(patternName) != 0){
		userCardName.classList.add('not-valid');
		isValid = false;
	}else{
		userCardName.classList.remove('not-valid');
	}
	if (isValid){
		closeModalWindow(modalCard);
	}
}