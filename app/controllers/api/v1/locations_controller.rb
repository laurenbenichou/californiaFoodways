class Api::V1::LocationsController < ApplicationController

def index
    # Gets all the story from the database and make them available via GET at /api/v1/stories
    @locations = Location.all
  end


end