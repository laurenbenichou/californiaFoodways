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
//= require angular-leaflet-directive.min.js
//= require offClick
//= require d3
//= require topojson
//= require queue
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
     console.log(ca);
    var counties = topojson.feature(ca, ca.objects.counties);
    var projection = d3.geo.albers()
        .translate([width / 3, height / 3])
        .parallels([33, 40.5])
        .rotate([120, 0])
        .scale(3000);

    var path = d3.geo.path()
      .projection(projection)


    svg.selectAll(".county").data(counties.features)
    .enter().append("path")
    .attr("class", "county")
    .attr("d", path)

  }


})



