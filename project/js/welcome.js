if (annyang) {

  var loc = 'Kiev';

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
    livingRoom();
    window.scrollTo(0,0);
    $('.lRoom-modal').addClass('modal-room-show');
    $('.lRoom-modal > .modal-content').addClass('modal-content-show');
    $('.lRoom-modal > .modal-content > .modal-header').addClass('modal-header-show');
    $('body').css({'overflow-y':'hidden'});  
  }

  var showDining = function(){
    diningRoom();
    window.scrollTo(0,0);
    $('.diningRoom-modal').addClass('modal-room-show');
    $('.diningRoom-modal > .modal-content').addClass('modal-content-show');
    $('.diningRoom-modal > .modal-content > .modal-header').addClass('modal-header-show');
    $('body').css({'overflow-y':'hidden'});  
  }

  var showBedroom = function(){
    bedRoom();
    window.scrollTo(0,0);
    $('.bedroom-modal').addClass('modal-room-show');
    $('.bedroom-modal > .modal-content').addClass('modal-content-show');
    $('.bedroom-modal > .modal-content > .modal-header').addClass('modal-header-show');
    $('body').css({'overflow-y':'hidden'});  
  }

  var showKitchen = function(){
    kitchen();
    window.scrollTo(0,0);
    $('.kitchen-modal').addClass('modal-room-show');
    $('.kitchen-modal > .modal-content').addClass('modal-content-show');
    $('.kitchen-modal > .modal-content > .modal-header').addClass('modal-header-show');
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

  var tVLampOn = function(){
    console.log('ceiling on');
    $('.modal-room-show .tv-light input[type="checkbox"]').prop('checked', true);
  };

  var tVLampOff = function(){
    console.log('ceiling off');
    $('.modal-room-show .tv-light input[type="checkbox"]').prop('checked', false);
  };

  var tVOn = function(){
    console.log('ceiling on');
    $('.modal-room-show .tv input[type="checkbox"]').prop('checked', true);
  };

  var tVOff = function(){
    console.log('ceiling off');
    $('.modal-room-show .tv input[type="checkbox"]').prop('checked', false);
  };

  var airOn = function(){
    console.log('ceiling on');
    $('.modal-room-show .air input[type="checkbox"]').prop('checked', true);
  };

  var airOff = function(){
    console.log('ceiling off');
    $('.modal-room-show .air input[type="checkbox"]').prop('checked', false);
  };

  var cookerOn = function(){
    console.log('ceiling on');
    $('.modal-room-show .cooker input[type="checkbox"]').prop('checked', true);
  };

  var cookerOff = function(){
    console.log('ceiling off');
    $('.modal-room-show .cooker input[type="checkbox"]').prop('checked', false);
  };

  var kettleOn = function(){
    console.log('ceiling on');
    $('.modal-room-show .kettle input[type="checkbox"]').prop('checked', true);
  };

  var kettleOff = function(){
    console.log('ceiling off');
    $('.modal-room-show .kettle input[type="checkbox"]').prop('checked', false);
  };

  var heatingOn = function(){
    console.log('heating on');
    $('.central-heating input[type="checkbox"]').prop('checked', true);
  };

   var heatingOff = function(){
    console.log('heating off');
    $('.central-heating input[type="checkbox"]').prop('checked', false);
  };

  var alarmOn = function(){
    console.log('alarm on');
    $('.alarm input[type="checkbox"]').prop('checked', true);
  };

   var alarmOff = function(){
    console.log('alarm off');
    $('.alarm input[type="checkbox"]').prop('checked', false);
  };

  var lockOn = function(){
    console.log('lock on');
    $('.lock input[type="checkbox"]').prop('checked', true);
  };

   var lockOff = function(){
    console.log('lock off');
    $('.lock input[type="checkbox"]').prop('checked', false);
  };

  var internetOn = function(){
    $('html, body').animate({
        scrollTop: $(".internet").offset().top
    }, 50);
    console.log('internet on');
    $('.internet input[type="checkbox"]').prop('checked', true);
  };

   var internetOff = function(){
    console.log('internet off');
    $('.internet input[type="checkbox"]').prop('checked', false);
  };

  var showAdmin = function(){
    console.log('Show Admin');
    $('.welcome_home').fadeOut();
    $('.admin_panel').fadeIn();
  }

  var rooms = function(){
    console.log('Show Rooms');
    $('.welcome_home').fadeIn();
    $('.admin_panel').fadeOut();
  }

  var setLocation = function(city){
    console.log(city);
    loc = city;
    weather();
  }
  var t;

  var scrollTop = function(){
    console.log('scroll top');
      var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
      if(top > 0) {
        window.scrollBy(0,-100);
        t = setTimeout('scrollTop()',50);
      } else clearTimeout(t);
      return false;
  }

  var down = function(){
    console.log('scroll down');
    $('html, body').animate({scrollTop: '+=300'}, 500);
  }

  var up = function(){
    console.log('scroll up');
    $('html, body').animate({scrollTop: '-=300'}, 500);
  }

  var fire = function(){
    window.open('tel:101');
  }

  var police = function(){
    window.location.href = 'tel:102';
  }

  var ambulance = function(){
    window.location.href = 'tel:103';
  }

  var gas = function(){
    window.location.href = 'tel:104';
  }

  var userCommands = {
    'living room': livingRoom,
    'bedroom': bedRoom,
    'dining room': diningRoom,
    'kitchen': kitchen,
    'show living room': showLiving,
    'show dining room': showDining,
    'show bedroom': showBedroom,
    'show kitchen': showKitchen,
    'close room': close,
    'close living room': close,
    'close dining room': close,
    'close bedroom': close,
    'close kitchen': close,
    'ceiling lights on': ceilingOn,
    'ceiling lights off': ceilingOff,
    'table lamp on': tableLampOn,
    'table lamp off': tableLampOff,
    'TV back light on': tVLampOn,
    'TV back light off': tVLampOff,
    'TV on': tVOn,
    'TV off': tVOff,
    'air conditioning on': airOn,
    'air conditioning off': airOff,
    'cooker on': cookerOn,
    'cooker off': cookerOff,
    'kettle on': kettleOn,
    'kettle off': kettleOff,
    'show admin panel': showAdmin,
    'go to admin panel': showAdmin,
    'admin panel': showAdmin,
    'set location *city': setLocation,
    'central heating on': heatingOn,
    'central heating off': heatingOff,
    'alarm system on': alarmOn,
    'alarm system off': alarmOff,
    'locks on': lockOn,
    'locks off': lockOff,
    'internet on': internetOn,
    'internet off': internetOff,
    'scroll top': scrollTop,
    'scroll down': down,
    'scroll up': up,
    'fire service': fire,
    'police': police,
    'ambulance': ambulance,
    'gas service': gas,
    'go to rooms': rooms
  };

  annyang.addCommands(userCommands);
  
  annyang.start ({autoRestart: true, continuous: false});

}

$('.close-modal').click(function(){
  console.log('i click');
  close();
});

$('.living_room_button').click(function(){
  showLiving();
});

$('.dining_room_button').click(function(){
  showDining();
});

$('.bedroom_button').click(function(){
  showBedroom();
});

$('.kitchen_button').click(function(){
  showKitchen();
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


console.log( new Date());

function startTime()
{
  var tm = new Date();
  var day = tm.getDate();
  var month = tm.getMonth() + 1;
  var year = tm.getFullYear();
  var h = tm.getHours();
  var m = tm.getMinutes();
  var s = tm.getSeconds();
  m=checkTime(m);
  s=checkTime(s);
  if (day != 10){
    day = "0" + day;
  }
  if (month != 10){
    month = "0" + month;
  }
  document.getElementById('date').innerHTML=day+"."+month+"."+year;
  document.getElementById('time').innerHTML=h+":"+m+":"+s;
  t=setTimeout('startTime()',500);
}

function checkTime(i)
{
  if (i<10)
{
  i="0" + i;
}
  return i;
}

var weather= function(){
  $.simpleWeather({
    location: loc,
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = '<div><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</div>';
      html2 = '<span>'+weather.city+'</span>';
      $("#weather").html(html);
      $("#location").html(html2);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
      $("#location").html('<p>'+error+'</p>');
    }
});
};

weather();

$('.go_admin').click(function(){
  showAdmin();
});
