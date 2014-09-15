// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require underscore
//= require angular
//= require angular-resource
//= require angular-animate
//= require offClick
//= require d3Directive
//= require topojsonDirective
//= require queueDirective
//= require Modernizr
//= require_tree ./angular

$(document).ready(function(){
  // set up margins
  var margin = {top: 10, right: 10, bottom: 10, left: 10};
    width = 500 - margin.left - margin.right,
    height = 550 - margin.top - margin.bottom;

  // append svg
  var svg = d3.select(".map").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
// get json
  queue()
    .defer(d3.json, "assets/ca-counties.json")
    .await(ready);

  function ready(error, ca) {
    if (error) return console.error(error);
    d3.select('.loading').remove();
    var counties = topojson.feature(ca, ca.objects.counties);
    var projection = d3.geo.albers()
        .translate([width / 3, height / 3])
        .parallels([33, 40.5])
        .rotate([120, 0])
        .scale(3000);

    var path = d3.geo.path()
      .projection(projection)


    var county = svg.selectAll(".county").data(counties.features)
    .enter().append("path")
    .attr("class", "county")
    .attr("d", path)

    svg.selectAll(".place-label")
      .data(topojson.feature(ca, ca.objects.counties).features)
      // .enter().append("text")
      // .attr("class", "place-label")
      // .attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
      // .attr("dy", "5px")
      .text(function(d) { return d.properties.name; });

    // svg.selectAll(".place-label")
    // .attr("x", function(d) { return d.geometry.coordinates[0] > -1 ? 6 : -6; })
    // .style("text-anchor", function(d) { return d.geometry.coordinates[0] > -1 ? "start" : "end"; });

     county.on('mouseover', showCaption)
        .on('mousemove', showCaption)
        .on('mouseout', function() {
            legend.html(starter);
        });


     var legend = d3.select('#legend'),
          starter = "<p>Click on a county</p>"

    function showCaption(d, i) {
        var county = [d.properties.name];
        legend.html(county);
    }
  }


})


// var urls = {
//         counties: "/visible-data/data/gis/us-counties.json",
//         states: "/visible-data/data/gis/us-states.json"
//     }
//   , margin = { top: 0, right: 0, bottom: 0, left: 0 }
//   , width = 960 - margin.right - margin.left
//   , height = 500
//   , path = d3.geo.path()
//   , map;

// var q = queue()
//     .defer(d3.json, "/visible-data/data/gis/us-counties.json")
//     .defer(d3.json, "/visible-data/data/gis/us-states.json")
//     .await(ready);

// function ready(error, countylines, statelines) {
//     window.error = error;
//     window.countylines = countylines;
//     window.statelines = statelines;

//     if (error) throw error;

//     var stateIds = {};
//     statelines.features.forEach(function(d) {
//         stateIds[d.id] = d.properties.name;
//     });

//     countylines.features.forEach(function(d) {
//         d.properties.state = stateIds[d.id.slice(0,2)];
//     })

//     // remove the loading text
//     d3.select('.loading').remove();

//     map = d3.select('#map').append('svg')
//         .style('width', width)
//         .style('height', height);

//     var counties = map.append('g')
//         .attr('class', 'counties')
//       .selectAll('path')
//         .data(countylines.features)
//       .enter().append('path')
//         .attr('d', path);

//     counties.on('mouseover', showCaption)
//         .on('mousemove', showCaption)
//         .on('mouseout', function() {
//             caption.html(starter);
//         });

//     var states = map.append('g')
//         .attr('class', 'states')
//       .selectAll('path')
//         .data(statelines.features)
//       .enter().append('path')
//         .attr('d', path);

//     var caption = d3.select('#caption')
//       , starter = caption.html();

//     function showCaption(d, i) {
//         var name = [d.properties.name, d.properties.state].join(', ');
//         caption.html(name);
//     }

// };

// d3.selectAll('pre').attr('class', 'prettyprint');
// prettyPrint();





