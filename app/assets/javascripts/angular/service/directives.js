app.directive("caliMap", function(){
  function link(scope, el, attr){
    var el = d3.select(".map");
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


    scope.$watch('counties', function(geo){
      var red ="#DE8E86"
      var county = g.selectAll(".county")
                    .data(geo)
                    .enter().append("path")
                    .attr('class', 'county')
                    .attr('d', path)

        starter = "<p>Click on a county</p>"
        county.on('mouseover', showCaption)
                .on('mousemove', showCaption)
                .on('mouseout', function() {
                    legend.html(starter);
                });


        function showCaption(d) {
                 legend = d3.select('#legend'),
                 title = [d.properties.name];
                 legend.html(title);
               }
    });
  };

  return {
    link: link,
    restrict: 'E',
    scope: { counties: '=', labels: '=' }
  }

})

