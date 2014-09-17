app.controller('MapCtrl', ['$scope', '$http', function($scope, $http){


  $scope.locations = [];
  $scope.locations_map = []
  $scope.counties = []
   var starter = "<p>Click on a county</p>"
  // Get the data from db
  $http.get('/api/v1/locations.json').success(function(data) {
      // On success, Get locations from db
      for (i= 0; i < data.locations.length; i++){
        var county_name = data.locations[i].county
        $scope.locations.push(county_name)
      }

    // d3 map
    var el = d3.select("#cali_map");
    var margin = {top: 10, right: 10, bottom: 10, left: 10};
    width = 500 - margin.left - margin.right,
    height = 550 - margin.top - margin.bottom;
    var projection = d3.geo.albers()
        .translate([width / 3, height / 3])
        .parallels([33, 40.5])
        .rotate([120, 0])
        .scale(3000);
    var path = d3.geo.path().projection(projection)
    var svg = el.append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    var g = svg.append('g');


     queue()
      .defer(d3.json, "assets/ca-counties.json")
      .await(ready);

    // Ready function
    function ready(error, ca) {
      if (error) return console.error(error);
      d3.select('.loading').remove();
          debugger
        // Get the boundaries and the labels from file
        $scope.counties = topojson.feature(ca, ca.objects.counties).features;
         $scope.county = g.selectAll(".county")
                    .data($scope.counties)
                    .enter().append("path")
                    .attr('class', 'county')
                    .attr('d', path)
                    .on('mouseover', showCaption)
                    .on('mousemove', showCaption)
                    .on('mouseout', function() {
                       legend.html(starter);
                    });

        // Compare location in db and california counties
      for (var i = 0; i < $scope.counties.length; i++) {
    // we want to know if a[i] is found in b
        var match = false; // we haven't found it yet
      for (var j = 0; j < $scope.locations.length; j++) {
        if ($scope.counties[i].properties.name == $scope.locations[j]) {
            // we have found a[i] in b, so we can stop searching
            match = true;
            break;
        }
        // if we never find a[i] in b, the for loop will simply end,
        // and match will remain false
      }
    // add a[i] to newArray only if we didn't find a match.
       if (match) {
        $scope.locations_map.push($scope.counties[i]);
      }
    }

     $scope.county_db = g.selectAll(".county_db")
                  .data($scope.locations_map)
                  .enter().append("path")
                  .attr('class', 'county_db')
                  .attr('d', path)
                  .on('mouseover', showCaption)
                  .on('mousemove', showCaption)
                  .on('mouseout', function() {
                       legend.html(starter);
                    })
                  .on("click", function(){
                    county_name = d.properties.name;
                    $scope.locations = county_name
                    $scope.$apply()
                  })


          function showCaption(d) {
               legend = d3.select('#legend'),
               title = d.properties.name;
               title = title.replace("County","");
               legend.html(title);
             }

    }
  })
}])
