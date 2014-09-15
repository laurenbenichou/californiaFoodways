@californiaFoodways.controller 'AnimationCtrl', ['$scope', ($scope) ->
  $scope.data = { active: false };
  $scope.className = "initial"

  $scope.toggle = ->
    $scope.data.active = !$scope.data.active;


]