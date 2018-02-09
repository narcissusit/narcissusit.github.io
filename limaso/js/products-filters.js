var categoryName = document.getElementsByClassName('category-name');

for (var i = 0; i < categoryName.length; i++){
	categoryName[i].addEventListener('click',function(){
		this.classList.toggle('active-category-name');
		var categoryTypes = this.nextElementSibling;
		showAccordeon(categoryTypes);
	})
}

function showAccordeon(accordeonContent){
	if (accordeonContent.style.maxHeight){
		accordeonContent.style.maxHeight = null;
	} else {
		accordeonContent.style.maxHeight = accordeonContent.scrollHeight + "px";
	} 
}

var mobileFilter = document.getElementById('mobile-filter');
mobileFilter.addEventListener('click', function(){
	var categoriesFilter = document.getElementById('categories-filter');
	showAccordeon(categoriesFilter);
});

var categoryName = document.getElementsByClassName('category-name');

var priceSlider = document.getElementById('price-slider');
var minPrice = document.getElementById('min-price');
var maxPrice = document.getElementById('max-price');

noUiSlider.create(priceSlider, {
	start: [70, 5846],
	connect: true,
	range: {
		'min': 70,
		'max': 5846
	}
});

priceSlider.noUiSlider.on('update', function( values, handle ) {
	var value = values[handle];
	if ( !handle ) {
		minPrice.value = Math.round(value);
		filterByPrice();
	} else {
		maxPrice.value = Math.round(value);
		filterByPrice();
	}
});

function sortCatalog(products, section, reverse = false) {
    var arProductsList = [];
    var strHtml = '';

    products.each(function (e) {
        arProductsList.push(products[e]);
    });

    if (reverse) {
        arProductsList.sort(comparePrice).reverse();
    } else {
        arProductsList.sort(comparePrice);
    }

    section.html('');

    for(var i = 0; i < arProductsList.length; i++) {
        $('.products-store').append(arProductsList[i]);
    }
}

function comparePrice(productA, productB) {
    return productA.getAttribute('data-price') - productB.getAttribute('data-price');
}

var sortSelect = document.getElementById('sort-select');
sortSelect.addEventListener('change', function(){
	var name = this.options[this.selectedIndex].getAttribute('id');
	if(name == 'up-price'){
		sortCatalog($('.product'), $('.products-store'), false);
	};
	if(name == 'down-price'){
		sortCatalog($('.product'), $('.products-store'), true);
	};
})

function filterByPrice(){
	var minV = +$('#min-price').val();
	var maxV = +$('#max-price').val();
	var productsList = document.getElementsByClassName('product');
	for(var i = 0; i < productsList.length; i++){
		var attrPrice = productsList[i].getAttribute('data-price');
		if(attrPrice <= maxV && attrPrice >= minV){
			productsList[i].style.display = 'block';
		}else{
			productsList[i].style.display = 'none';
		}
	}
}