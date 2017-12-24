if (annyang) {

  var login = function(name){
      var user = document.getElementById('user');
      user.focus();
      user.value = name;
      console.log("username" + name);
    };

  var addPassword = function(pass){
      var password = document.getElementById('pass');
      password.focus();
      password.value = pass;
      console.log("password" + pass);
    };

  var commands = {
    'username *name': login,
    'password *pass': addPassword
  };

	
  
  annyang.addCommands(commands);
  
  annyang.start();
}
