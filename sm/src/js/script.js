document.addEventListener('DOMContentLoaded', function(){

	setTimeout(function(){
		document.body.classList.add('start-anim');
	}, 1000);

    var parallaxBox = document.getElementById ( 'box-parallax' );
	var c1left = document.getElementById ( 'p1' ).offsetLeft,
	    c1top = document.getElementById ( 'p1' ).offsetTop,
	    c2left = document.getElementById ( 'p2' ).offsetLeft,
	    c2top = document.getElementById ( 'p2' ).offsetTop;


	    
    parallaxBox.onmousemove = function ( event ) {
        event = event || window.event;
        var x = event.clientX - parallaxBox.offsetLeft,
        y = event.clientY - parallaxBox.offsetTop;
        
        mouseParallax ( 'p1', c1left, c1top, x, y, 40 );
        mouseParallax ( 'p2', c2left, c2top, x, y, 40 );


    }
	    

	function mouseParallax ( id, left, top, mouseX, mouseY, speed ) {
	    var obj = document.getElementById ( id );
	    var parentObj = obj.parentNode,
	    containerWidth = parseInt( parentObj.offsetWidth ),
	    containerHeight = parseInt( parentObj.offsetHeight );
	    obj.style.left = left - ( ( ( mouseX - ( parseInt( obj.offsetWidth ) / 2 + left ) ) / containerWidth ) * speed ) + 'px';
	    obj.style.top = top - ( ( ( mouseY - ( parseInt( obj.offsetHeight ) / 2 + top ) ) / containerHeight ) * speed ) + 'px';
	}
});