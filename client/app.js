angular.module('Instagram', ['ngRoute', 'ngMessages', 'satellizer'])
  .config(function($routeProvider, $authProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/photo/:id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })
      .otherwise('/');

    $authProvider.loginUrl = 'https://learnix-instagram.herokuapp.com/auth/login';
    $authProvider.signupUrl = 'https://learnix-instagram.herokuapp.com/auth/signup';
    $authProvider.oauth2({
      name: 'instagram',
      url: 'https://learnix-instagram.herokuapp.com/auth/instagram',
      redirectUri: 'https://www.dropbox.com/s/sd32mh93liam05p/index.html',
      clientId: '3a996d8b89354e1f968eb31329bf40e4',
      requiredUrlParams: ['scope'],
      scope: ['likes'],
      scopeDelimiter: '+',
      authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
    });
  })
  .run(function($rootScope, $window, $auth) {
    if ($auth.isAuthenticated()) {
      $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
    }
  });
