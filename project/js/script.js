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
    signIN();
  }

  var register = function(){
    var formData = $(".custom-form").serialize();
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
    signIN();
  }

  var loginCommands = {
    'username *name': login,
    'password *pass': addPassword,
    'register now': registerNow, 
    'back to sign in': signIn,
    'register': register,
    'sign in': welcome,
  };
  
  annyang.addCommands(loginCommands);
  
  annyang.start();

}

function signIN(){
  var formData = $('.custom-form').serializeArray();
    console.log(formData);
    console.log(formData[0].value);
    console.log(formData[1].value);
    $.getJSON('database.json', function(data){
    $.each(data, function(i, user){
      console.log(user.login + ' ' +user.password);
      $('#no_user').text(" ");
      if(user.login == formData[0].value && user.password == formData[1].value){
        location.href = 'welcome.html';
        $('#no_user').text(" ");
      }
      else{
        $('#no_user').text("uncorrect login or password");
      }
      })
    });
}


$('.custom-form').submit(function(e){
    e.preventDefault();
    signIN();
});

  