@californiaFoodways.controller 'HomeCtrl', ['$scope', "Story", ($scope, Story) ->
  $scope.stories = Story.query()
]