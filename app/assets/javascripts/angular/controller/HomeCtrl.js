app.controller('HomeCtrl', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    $scope.stories = [];

    // Get stories from datavase
    $http.get('/api/v1/stories.json').success(function(data) {
      return $scope.stories = data.stories;
    });

    // Get soundcloud Iframe
    return $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    };

}]);
