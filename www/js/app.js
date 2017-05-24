angular.module('ionicApp', ['ionic', 'ionicApp.controllers', 'ionicApp.services'])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('login', {
      url: '/log-in',
      templateUrl: 'templates/log-in.html',
      controller: 'signupCtrl'
})

    .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller: 'signupCtrl'
})

    .state('tabs', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
})

    .state('tabs.contacts', {
      url: '/contacts',
      views: {
        'contacts-tab': {
          templateUrl: 'templates/tabs-contacts.html'
      }
    }
})

   .state('phone', {
      url: '/phone',
      templateUrl: 'templates/phone.html',
      controller: 'phoneCtrl'
})

   .state('validation', {
      url: '/validation',
      templateUrl: 'templates/validation.html',
      controller: 'validationCtrl'
})

    $urlRouterProvider.otherwise('/log-in');

})
