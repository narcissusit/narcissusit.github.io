if (annyang) {

  var livingRoom = function(){
    $('#living_room').addClass('room_info');
    $('#bedroom').removeClass('room_info');
    $('#dining_room').removeClass('room_info');
    $('#kitchen').removeClass('room_info');
    console.log('yes');
  }

  var bedRoom = function(){
    $('#living_room').removeClass('room_info');
    $('#bedroom').addClass('room_info');
    $('#dining_room').removeClass('room_info');
    $('#kitchen').removeClass('room_info');
    console.log('yes');
  }

  var diningRoom = function(){
    $('#living_room').removeClass('room_info');
    $('#bedroom').removeClass('room_info');
    $('#dining_room').addClass('room_info');
    $('#kitchen').removeClass('room_info');
    console.log('yes');
  }

  var kitchen = function(){
    $('#living_room').removeClass('room_info');
    $('#bedroom').removeClass('room_info');
    $('#dining_room').removeClass('room_info');
    $('#kitchen').addClass('room_info');
    console.log('yes');
  }

  var showLiving = function(){
    window.scrollTo(0,0);
    $('.lRoom-modal').addClass('modal-room-show');
    $('.lRoom-modal > .modal-content').addClass('modal-content-show');
    $('.lRoom-modal > .modal-content > .modal-header').addClass('modal-header-show');
    $('body').css({'overflow-y':'hidden'});  
  }

  var showDining = function(){
    window.scrollTo(0,0);
    $('.diningRoom-modal').addClass('modal-room-show');
    $('.diningRoom-modal > .modal-content').addClass('modal-content-show');
    $('.diningRoom-modal > .modal-content > .modal-header').addClass('modal-header-show');
    $('body').css({'overflow-y':'hidden'});  
  }

   var close = function(){
    $('.modal-room').removeClass('modal-room-show');
    $('.modal-room > .modal-content').removeClass('modal-content-show');
    $('.modal-room > .modal-content > .modal-header').removeClass('modal-header-show');
    $('body').css({'overflow-y':'visible'});  
  }

  var ceilingOn = function(){
    console.log('ceiling on');
    $('.modal-room-show .ceil input[type="checkbox"]').prop('checked', true);
  };

  var ceilingOff = function(){
    console.log('ceiling off');
    $('.modal-room-show .ceil input[type="checkbox"]').prop('checked', false);
  };

  var tableLampOn = function(){
    console.log('ceiling on');
    $('.modal-room-show .table-lamp input[type="checkbox"]').prop('checked', true);
  };

  var tableLampOff = function(){
    console.log('ceiling off');
    $('.modal-room-show .table-lamp input[type="checkbox"]').prop('checked', false);
  };

  var userCommands = {
    'living room': livingRoom,
    'bedroom': bedRoom,
    'dining room': diningRoom,
    'kitchen': kitchen,
    'show living room': showLiving,
    'show dining room': showDining,
    'close room': close,
    'close living room': close,
    'ceiling lights on': ceilingOn,
    'ceiling lights off': ceilingOff,
    'table lamp on': tableLampOn,
    'table lamp off': tableLampOff
  };

  annyang.addCommands(userCommands);
  
  annyang.start();

}

$('.close-modal').click(function(){
  console.log('i click');
  close();
});

$('.living_room_button').click(function(){
  showLiving();
});

$('#living_room').hover(function(){
    $('#living_room').addClass('room_info');
    $('#bedroom').removeClass('room_info');
    $('#dining_room').removeClass('room_info');
    $('#kitchen').removeClass('room_info');
});

$('#bedroom').hover(function(){
    $('#living_room').removeClass('room_info');
    $('#bedroom').addClass('room_info');
    $('#dining_room').removeClass('room_info');
    $('#kitchen').removeClass('room_info');
});

$('#dining_room').hover(function(){
    $('#living_room').removeClass('room_info');
    $('#bedroom').removeClass('room_info');
    $('#dining_room').addClass('room_info');
    $('#kitchen').removeClass('room_info');
});

$('#kitchen').hover(function(){
    $('#living_room').removeClass('room_info');
    $('#bedroom').removeClass('room_info');
    $('#dining_room').removeClass('room_info');
    $('#kitchen').addClass('room_info');
});
