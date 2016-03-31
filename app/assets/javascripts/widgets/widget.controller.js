(function() {
  var widgetsModule = angular.module('foo.widgets');

  widgetsModule.controller('WidgetsController', ['$scope', WidgetsController]);

  function WidgetsController($scope) {
  }
})();
