@californiaFoodways.controller 'HomeCtrl', ['$scope', '$location', '$http', '$sce',  ($scope, $location, $http, $sce) ->
  $scope.stories = []
  $scope.locations = []
  $http.get('/api/v1/stories.json').success((data) ->
    $scope.stories = data.stories
  )

  $http.get('/api/v1/locations.json').success((data) ->
    $scope.locations = data.locations
  )

  $scope.trustSrc = (src) ->
    $sce.trustAsResourceUrl src

]
