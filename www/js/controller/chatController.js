starter.controller('chatController', function($rootScope,$scope, $ionicPopup, $ionicModal, $timeout,$state, FIREBASE_URL, $firebaseArray, EMAIL,$localStorage) {

  var ref = new Firebase(FIREBASE_URL);
  var messageArray = $firebaseArray(ref);



  $scope.chatdata = [];

  $scope.logout = function(){
    delete $localStorage.userObject;
    $state.go('login')
  };

  $scope.chat = {
    username:$localStorage.userObject.username,
    message:null
  };


  ref.on('child_added', function(snapshot) {
    var message = snapshot.val();

    $scope.chatdata.push({username:message.username,message: message.message})
  });

  $scope.sendChat = function (message) {
    ref.push({username: $scope.chat.username, message: message});
    $scope.chat.message = null;
  }

});




