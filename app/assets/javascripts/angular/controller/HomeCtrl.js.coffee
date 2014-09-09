@californiaFoodways.controller 'HomeCtrl', ['$scope', '$location', '$http', ($scope, $location, $http) ->
  $scope.stories = []
  $scope.locations = []
  $http.get('/api/v1/stories.json').success((data) ->
    $scope.stories = data.stories
  )

  $http.get('/api/v1/locations.json').success((data) ->
    $scope.locations = data.locations
  )

]

