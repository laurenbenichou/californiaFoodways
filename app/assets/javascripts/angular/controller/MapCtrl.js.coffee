@californiaFoodways.controller 'MapCtrl', ['$scope', '$http', ($scope, $http) ->

# init map
  angular.extend($scope, {
    defaults: {
        tileLayer: "https://{s}.tiles.mapbox.com/v3/laurenbenichou.jf238cf1/{z}/{x}/{y}.png",
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

# http request to get GeoJson
  $http.get('caCounty.json').success((data) ->
   angular.extend($scope, {
            geojson: {
                data: data,
                style: {
                    fillColor: "green",
                    weight: 2,
                    opacity: 1,
                    color: 'white',
                    dashArray: '3',
                    fillOpacity: 0.1
                }
            }
        });
   )
]