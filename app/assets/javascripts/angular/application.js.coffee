# modules
@californiaFoodways = angular.module("californiaFoodwaysApp", ["ngResource", "leaflet-directive", 'ngAnimate', 'offClick'])

@d3 = angular.module("d3", []).factory "d3Service", [->
  d3 = undefined

  # insert d3 code here
  d3
]