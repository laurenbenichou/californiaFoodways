var app = angular.module("californiaFoodwaysApp", ['californiaFoodwaysApp.controllers', 'californiaFoodwaysApp.routes']);

angular.module("californiaFoodwaysApp.controllers", ['ngAnimate', 'offClick']);

angular.module("californiaFoodwaysApp.routes",
  ['ngAnimate','ui.router', 'templates'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    /**
     * Routes and States
     */
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html',
            controller: 'HomeCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'about.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'contact.html'
        })
        .state('support', {
            url: '/support',
            templateUrl: 'support.html'
        })

    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);
});
    //   // route for the home page
    //   $routeProvider
    //   .when('/', {
    //     templateUrl : 'templates/home.html'
    //   })
    //   // route for the about page
    //   .when('/about', {
    //     templateUrl : 'templates/about.html'
    //   })

    //   // route for the contact page
    //   .when('/contact', {
    //     templateUrl : 'templates/contact.html'
    //   });

    // $locationProvider.html5Mode(true);
  // });