(function() {
  var listing = angular.module('foo.listing', []);

  listing.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'My Angular Rails example'
    $scope.foo = 'bar'
  }]);
})();
