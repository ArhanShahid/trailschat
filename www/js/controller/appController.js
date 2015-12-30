starter.controller('appController', function($rootScope,$scope, $ionicPopup, $ionicModal, $timeout,$state, FIREBASE_URL, EMAIL,$localStorage) {

  console.log("appController");

  function isLogin(){
    if($localStorage.userObject){
      console.log("User Already Login");
      console.log($localStorage.userObject);
      if($localStorage.userObject.authData && $localStorage.userObject.username){
        $state.go('chat');
      }
    }
  }
  isLogin();

});





