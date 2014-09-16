app.controller('MapCtrl', function($scope){

// Get the data
  queue()
    .defer(d3.json, "assets/ca-counties.json")
    .await(ready);

function ready(error, ca) {
    if (error) return console.error(error);
    d3.select('.loading').remove();
    $scope.$apply(function(){
      // Get the boundaries and the labels from file
      $scope.counties = topojson.feature(ca, ca.objects.counties).features;
      // $scope.labels = topojson.feature(ca, ca.objects.counties).features;
   })
  }
})
