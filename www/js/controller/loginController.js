starter.controller('loginController', function($rootScope,$scope, $ionicPopup, $ionicModal, $timeout,$state, FIREBASE_URL, EMAIL,$localStorage) {

  var ref = new Firebase(FIREBASE_URL);

  $scope.showAlert = function(title,message) {
    var alertPopup = $ionicPopup.alert({
      title: title,
      template: message
    });
    alertPopup.then(function(res) {

    });
  };

  $scope.loginData = {
    username:null,
    password:null
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  $scope.doLogin = function(data){

    if(data.username && data.password){

      var trimString = data.username;
      var tolowerCase = trimString.trim();
      var username = tolowerCase.toLocaleLowerCase() + EMAIL;
      ref.authWithPassword({
        email    : username,
        password : data.password
      }, function(error, authData) {
        if (error) {
          $scope.showAlert('Login Failed!','Invalid Username or Password');
        } else {

          var userObject = {
            username: capitalizeFirstLetter(tolowerCase),
            authData:authData
          };
          $localStorage.userObject = userObject;
          $state.go('chat');
        }
      });
    }else{
      $scope.showAlert('Invalid Input!','Invalid or Empty Input');
    }

  };
  $scope.navigateToSignUp = function(){
    $state.go('signup')
  };



});
