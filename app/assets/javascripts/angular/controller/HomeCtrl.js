app.controller('HomeCtrl', [
  '$scope', '$http', '$sce', function($scope, $http, $sce) {
    $scope.stories = [];
    $scope.locations = [];
    $http.get('/api/v1/stories.json').success(function(data) {
      return $scope.stories = data.stories;
    });
    $http.get('/api/v1/locations.json').success(function(data) {
      return $scope.locations = data.locations;
    });
    return $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    };
  }
]);
