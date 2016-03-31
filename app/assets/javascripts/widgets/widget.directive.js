(function() {
  var widgetsModule = angular.module('foo.widgets');

  widgetsModule.directive('fooWidget', fooWidget);

  function fooWidget() {
    return {
      restrict: 'E',
      scope: {
        param: '='
      },
      controller: 'WidgetsController',
      templateUrl: 'widgets-template.html'
    };
  }

})();
