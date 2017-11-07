var correct = 0;
$(init);
 
function init() {
 
  for ( var i=1; i<=3; i++ ) {
    $('#drag'+i).data( 'number', i).draggable( {
      containment: 'body',
      stack: '.bag',
      cursor: 'move',
      revert: true
    } );
  }
 
  for ( var i=1; i<=3; i++ ) {
    $('#drop'+i).data('number', i).droppable( {
      accept: '.bag',
      hoverClass: 'hovered',
      drop: handleCardDrop
    } );
  }
 
}
function handleCardDrop(event, ui) {
  var slotNumber = $(this).data( 'number' );
  var cardNumber = ui.draggable.data( 'number' );

  if ( slotNumber == cardNumber ) {
    ui.draggable.draggable( 'disable' );
    $(this).droppable( 'disable' );
    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    ui.draggable.draggable( 'option', 'revert', false );
    correct++;
  } 
   
  if ( correct == 3 ) {
    $('.bags_places img').css({display: 'none'});
    $('.tires').fadeIn('slow',  function (){
      $('.car img').animate({width: '20%'}, 1000);
      $('.bag:first-child, .bag:last-child').animate({width: '5.5%'}, 1000);
      $('.bag:nth-child(2)').animate({width: '3.5%'}, 1000, function(){
        $('.first_slide').fadeOut(200, 
          function(){
            $('.second_slide').fadeIn(200, function(){
              $('h3').fadeIn(500, function(){
                $('.capacity').fadeIn(1000, function(){
                  $('.winner').show("slide", {direction: "right" }, 500, function(){
                    $('h2').fadeIn(1000, function () {
                      $('.volvo').animate({right: '0'}, 500);
                      $('.test_button').fadeIn(1000, function () {
                        $('.internet').fadeIn(1000);
                      });
                    })
                  })
                })
              });
            })
        });
      });
      });
  }
 
}