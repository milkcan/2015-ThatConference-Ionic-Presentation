angular.module('spotit', ['ionic', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
   $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })
    .state('app.home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'AppCtrl'
    })
    .state('app.create', {
      url: '/create',
      views: {
        'menuContent': {
          templateUrl: 'templates/create.html',
          controller: 'CreateCtrl'
        }
      }
    })
    .state('app.view', {
        url: '/view',
        views: {
          'menuContent': {
            templateUrl: 'templates/view.html',
            controller: 'ViewCtrl'
          }
        }
      })
      .state('app.about', {
        url: '/about',
        views: {
          'menuContent': {
            templateUrl: 'templates/about.html'
          }
        }
      });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});