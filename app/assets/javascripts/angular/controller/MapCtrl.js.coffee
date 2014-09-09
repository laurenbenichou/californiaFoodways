@californiaFoodways.controller 'MapCtrl', ['$scope', ($scope) ->

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
});
]