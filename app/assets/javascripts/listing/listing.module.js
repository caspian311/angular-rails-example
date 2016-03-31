(function() {
  var listing = angular.module('foo.listing', []);

  listing.controller('MainController', ['$scope', '$http', function($scope, $http) {
    $scope.title = 'My Angular Rails example';

    $http.get('/widgets')
      .success(function(data) {
        $scope.widgets = data;
      });
    $scope.foo = 'bar';
  }]);
})();
