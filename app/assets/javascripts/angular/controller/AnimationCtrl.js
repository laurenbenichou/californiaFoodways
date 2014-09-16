app.controller('AnimationCtrl', [
  '$scope', function($scope) {
    $scope.data = {
      active: false
    };
    return $scope.toggle = function() {
      return $scope.data.active = !$scope.data.active;
    };
  }
]);