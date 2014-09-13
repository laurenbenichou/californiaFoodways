@californiaFoodways.controller 'MapCtrl', ['$scope', '$http', ($scope, $http) ->
#mouseover event
  $scope.$on "leafletDirectiveMap.geojsonMouseover", (ev, leafletEvent) ->
    countyMouseover leafletEvent

# init map
  angular.extend($scope, {
    defaults: {
        tileLayer: "https://{s}.tiles.mapbox.com/v3/laurenbenichou.jf70pcdf/{z}/{x}/{y}.png",
        minZoom: 6,
        maxZoom: 9,
        scrollWheelZoom: false,
    }
    center: {
        lat: 37.501,
        lng:  -120.828,
        zoom: 6
    }
})

#  Mouse over function, called from the Leaflet Map Events
  countyMouseover = (leafletEvent) ->
    layer = leafletEvent.target
    layer.setStyle
      weight: 2,
      fillOpacity: 0,
      opacity: 1,
      color: "black"

    layer.bringToFront()

# http request to get GeoJson
  $http.get('caCounty.json').success((data) ->
   angular.extend($scope, {
            geojson: {
                data: data,
                resetStyleOnMouseout: true,
                style: {
                    fillColor: "white",
                    weight: 2,
                    opacity: .7,
                    color: 'white',
                    dashArray: '3',
                    fillOpacity: .7
                }
            }
        });
   )
]