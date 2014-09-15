@californiaFoodways.controller 'AnimationCtrl', ['$scope', ($scope) ->
  $scope.data = { active: false };


  $scope.toggle = ->
    $scope.data.active = !$scope.data.active;


]