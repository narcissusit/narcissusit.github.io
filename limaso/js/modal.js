var modalCard = document.getElementById('modal-card');
var modalAjax = document.getElementById('modal-ajax');
var productBasket = document.getElementsByClassName('product-basket');
var showButton = document.getElementById('show-button');
var closeModalButton = document.getElementsByClassName('close-modal');

function showModal(){
	for(var i = 0; i < productBasket.length; i++){
		productBasket[i].addEventListener('click', function(){
			showModalWindow(modalCard);
		});
	}
	showButton.addEventListener('click', function(){
		showModalWindow(modalAjax);
	})
}

function closeModal(){
	for(var i = 0; i < closeModalButton.length; i++){
		closeModalButton[i].addEventListener('click', function(){
			closeModalWindow(modalCard);
			closeModalWindow(modalAjax);
		})
	}
}

showModal();
closeModal();

function closeModalWindow(modal){
	modal.classList.remove('open-modal');
	modal.firstElementChild.classList.remove('open-modal-content');
	document.body.style.overflow = 'auto';
}

function showModalWindow(modal){
	modal.classList.add('open-modal');
	modal.firstElementChild.classList.add('open-modal-content');
	document.body.style.overflow = 'hidden';
}

window.onclick = function(event) {
    if (event.target == modalCard) {
		closeModalWindow(modalCard);
	}
    if (event.target == modalAjax) {
		closeModalWindow(modalAjax);
	}
}
