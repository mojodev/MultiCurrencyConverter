'use strict';

/**
 * @ngdoc overview
 * @name currencyApp
 * @description
 * # currencyApp
 *
 * Main module of the application.
 */
angular
  .module('currencyApp', [
    'ngRoute',
    'ngSanitize',
    'ngTagsInput'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/currconverter', {
        templateUrl: 'views/currconv.html',
        controller: 'CurrconvCtrl'
      })
      .otherwise({
        redirectTo: '/currconverter'
      });
  });
