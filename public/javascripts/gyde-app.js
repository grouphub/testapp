'use strict';

var gydeApp = angular.module('gydeApp', [
  'ngRoute',
  'gydeControllers'
]);

gydeApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.
      when('/', {
        templateUrl: '/javascripts/partials/home.html',
        controller: 'HomeController'
      }).
      when('/priorities', {
        templateUrl: '/javascripts/partials/priorities.html',
        controller: 'PrioritiesController'
      }).
      when('/conditions', {
        templateUrl: '/javascripts/partials/conditions.html',
        controller: 'ConditionsController'
      }).
      when('/details', {
        templateUrl: '/javascripts/partials/details.html',
        controller: 'DetailsController'
      }).
     //when('/provider', {
     //   templateUrl: '/javascripts/partials/provider.html',
     //   controller: 'ProviderController'
     // }). 
      
      when('/results', {
        templateUrl: '/javascripts/partials/results.html',
        controller: 'ResultsController'
      }).
      otherwise({
        redirectTo: '/'
      })
  }
]);

