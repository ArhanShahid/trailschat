starter.controller('signUpController', function($rootScope,$scope, $ionicPopup, $ionicModal, $timeout,$state, FIREBASE_URL, EMAIL, $localStorage) {

  var ref = new Firebase(FIREBASE_URL);

  $scope.showAlert = function(title,message) {
    var alertPopup = $ionicPopup.alert({
      title: title,
      template: message
    });
    alertPopup.then(function(res) {
    });
  };
  $scope.signUpData = {
    username:null,
    password:null,
    rePassword:null
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  $scope.doSignUp = function(data){
    if((data.username && data.password && data.rePassword) && (data.rePassword === data.password)){
      var trimString = data.username;
      var tolowerCase = trimString.trim();
      var username = tolowerCase.toLocaleLowerCase() + EMAIL;
      ref.createUser({
        email: username,
        password: data.password
      }, function(error, userData) {
        if (error) {
          switch (error.code) {
            case "EMAIL_TAKEN":
              $scope.showAlert('Email Already Taken!','The new user account cannot be created because the email is already in use.');
              break;
            case "INVALID_EMAIL":
              $scope.showAlert('Email Already Taken!','The specified email is not a valid email.');
              break;
            default:
              $scope.showAlert('Error creating user!','Error creating user');
          }
        } else {
          var userObject = {
            username: capitalizeFirstLetter(tolowerCase),
            authData:userData
          };

          $localStorage.userObject = userObject;
          $state.go('chat');

        }
      });

    }else{
      $scope.showAlert('Invalid Input!','Invalid or Empty Input');
    }

    $scope.navigateToLogin = function(){
      $state.go('login')
    };



  };
});

