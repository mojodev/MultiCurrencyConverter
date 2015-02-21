'use strict';

angular.module('currencyApp')
  .controller('CurrconvCtrl', function($scope, $http, numberFilter, $q, filterFilter) {
        var openExchangeRatesUrl = 'http://openexchangerates.org/api/';
        var apiKey = '?app_id=bcc0957a024b418fb4a910603171bb06';
        var _scope = {};
        $scope.taggedCurrencyValues = [];
        $scope.tags = [];
        $scope.loadCountry = function(query) {
            var deffered = $q.defer();
            if ($scope.taggedCurrencyValues) {
                $scope.dupTaggedCurrencyValues = filterFilter($scope.taggedCurrencyValues, {
                    $: query
                });
                deffered.resolve($scope.dupTaggedCurrencyValues);
            } else {
                deffered.reject();
            }
            return deffered.promise;
        };


        _scope.init = function() {
            getCountryInfo();
            getCurrencyInfo();
        }
        var getCountryInfo = function() {
            $http.get(openExchangeRatesUrl + 'currencies.json' + apiKey).then(function(response) {
                $scope.currencyNames = response.data;
                for (var key in $scope.currencyNames) {
                    $scope.taggedCurrencyValues.push({
                        id: key,
                        name: $scope.currencyNames[key]
                    });
                }
            });
        }

        var getCurrencyInfo = function() {
            $http.get(openExchangeRatesUrl + 'latest.json' + apiKey).then(function(response) {
                $scope.currencyValues = response.data.rates;
            });
        }


        $scope.getBaseCurrency = function(code, value) {

            return $scope.currencyNames[code] + " (" + code + ")";
        };
        _scope.init();
    });