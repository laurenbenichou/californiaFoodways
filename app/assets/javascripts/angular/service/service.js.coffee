@californiaFoodways.factory "Story", ["$resource", ($resource) ->
  $resource("/api/v1/stories.json", {}, {"query": {method: "GET", isArray: false}})
]