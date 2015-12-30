starter.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('login', {
      url: '/Login',
      templateUrl: 'templates/login.html',
      controller: 'loginController'
    })
    .state('signup', {
      url: '/SignUp',
      templateUrl: 'templates/signUp.html',
      controller: 'signUpController'
    })
    .state('chat', {
      url: '/Chat',
      templateUrl: 'templates/chat.html',
      controller: 'chatController'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/Login');
});
