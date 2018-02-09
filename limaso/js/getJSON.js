
$.getJSON('../text.json', function(data){

	$.each(data, function(i, info){
		var title = '<h2 class="modal-title">'+info.title+'</h2>';
		var firstP = '<p class="modal-text">'+info.firstParagraph+'</p>';
		var secondP = '<p class="modal-text">'+info.secondParagraph+'</p>';
		$('.modal-ajax-title').append(title+firstP+secondP);
	});
})

