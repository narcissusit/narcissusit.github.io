if (annyang) {

  var login = function(name){
      var user = document.getElementById('user');
      user.focus();
      user.value = name;
      console.log("username " + name);
    };

  var addPassword = function(pass){
      var password = document.getElementById('pass');
      password.focus();
      password.value = pass;
      console.log("password " + pass);
    };

  var registerNow = function(){
    location.href = 'register.html';
  }

   var signIn = function(){
    location.href = 'index.html';
  }

  var register = function(){
    var formData = $("#contacts-form").serialize();
    $.ajax({
      type: "POST",
      url: 'database.json',
      data: formData,
      success: function(data) {
        console.log(data);
      }
    });
    location.href = 'index.html';
  }

  var welcome = function(){
    location.href = 'welcome.html';
  }

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

  var loginCommands = {
    'username *name': login,
    'password *pass': addPassword,
    'register now': registerNow, 
    'back to sign in': signIn,
    'register': register,
    'sign in': welcome,
  };

  var userCommands = {
    'living room': livingRoom,
    'bedroom': bedRoom,
    'dining room': diningRoom,
    'kitchen': kitchen,
  };
  
  annyang.addCommands(loginCommands);
  annyang.addCommands(userCommands);
  
  annyang.start();

}


$('#contacts-form').submit(function(e){
    e.preventDefault();
    var formData = $("#contacts-form").serialize();

    $.ajax({
      type: "POST",
      url: 'database.json',
      data: formData,
      success: function(data) {
        console.log(data);
      }
  })
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