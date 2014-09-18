app.controller('MapCtrl', ['$scope', '$http', function($scope, $http){


  $scope.locations = [];
  var locations_map = []
  var counties = []
  var current_location = []
  var others = []
  var starter = "<p>Click on a county</p>"


  // Get the present locations in database
  $http.get('/api/v1/locations.json').success(function(data) {

      // On success, Get location's name from the database
      for (i= 0; i < data.locations.length; i++){
        var county_name = data.locations[i].county
        $scope.locations.push(county_name)
      }

    // create the d3 map of California
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
      // Throws error
      if (error) return console.error(error);

      // if no error then remove "loading"
      d3.select('.loading').remove();


        // Get all the counties in ca from  json file
        counties = topojson.feature(ca, ca.objects.counties).features;

        // maps all the counties in california
        $scope.county = g.selectAll(".county")
            .data(counties)
            .enter().append("path")
            .attr('class', 'county')
            .attr('d', path)
            .on('mouseover', showCaption)
            .on('mousemove', showCaption)
            .on('mouseout', function() {
             legend.html(starter);
           });

        // Compare location in db and california counties and get info
        // for locations in the database so that we can map them
        for (var i = 0; i < counties.length; i++) {
        // we want to know if a[i] is found in b
            var match = false; // we haven't found it yet
            for (var j = 0; j < $scope.locations.length; j++) {
              if (counties[i].properties.name == $scope.locations[j]) {
                // we have found a[i] in b, so we can stop searching
                match = true;
                break;
              }
            // if we never find a[i] in b, the for loop will simply end,
            // and match will remain false
          }
        // add a[i] to newArray only if we didn't find a match.
        if (match) {
          locations_map.push(counties[i]);
        }
      }


        // Get all the counties from db onto map
        $scope.county_db = g.selectAll(".county_db")
              .data(locations_map)
              .enter().append("path")
              .attr('class', 'county_db')
              .attr('d', path)
              .on('mouseover', showCaption)
              .on('mousemove', showCaption)
              .on('mouseout', function() {
               legend.html(starter);
             })
              .on("click", change_showStory)


        // Function to connect the map and the select element
        // $scope.showStory gets updated if you select a county
        // on map and from the select option.

        $scope.updateMap =  function(showStory){
          for (var i = 0; i < locations_map.length; i++){
            if(locations_map[i].properties.name == showStory){
              current_location.push(locations_map[i])
            }else{
              others.push(locations_map[i])
            }
          }

          // resets previously selected location
          non_selected_locations = g.selectAll(".non_selected_location")
                    .data(others)
                    .enter().append("path")
                    .attr('class', 'non_selected_location')
                    .attr('d', path)
                    .on('mouseover', showCaption)
                    .on('mousemove', showCaption)
                    .on('mouseout', function() {
                     legend.html(starter);
                   })
                    .on("click", change_showStory)

          // Highlight current location on the map
          selected_location = g.selectAll(".selected_county")
                  .data(current_location)
                  .enter().append("path")
                  .attr('class', 'selected_county')
                  .attr('d', path)
                  .on('mouseover', showCaption)
                  .on('mousemove', showCaption)
                  .on('mouseout', function() {
                   legend.html(starter);
                 })
                  .on("click", change_showStory)


        }

        // Show captions in legend
        function showCaption(d) {
         legend = d3.select('#legend'),
         title = d.properties.name;
         legend.html(title);
       }

       // Change scope on click.
       function change_showStory(d){
        county_name = d.properties.name;
        $scope.showStory = [county_name]
        $scope.$apply()
      }
    }
  })
}])
