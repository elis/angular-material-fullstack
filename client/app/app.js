'use strict';

angular.module('jasonApp', ['jasonApp.constants', 'ngMaterial', 'ngCookies', 'ngResource', 'ngSanitize',
    'ui.router'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
