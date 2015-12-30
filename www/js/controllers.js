angular.module('starter.controllers', [])

.controller('loginCtrl', function($scope, $ionicModal, $timeout) {

    $scope.loginData = {
      username:null,
      password:null
    };
	console.log("loginCtrl");

    $scope.doLogin = function(data){
      console.log(data);
    };
});
