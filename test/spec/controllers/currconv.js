'use strict';

describe('Controller: CurrconvCtrl', function () {

  // load the controller's module
  beforeEach(module('currencyApp'));

  var CurrconvCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CurrconvCtrl = $controller('CurrconvCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
