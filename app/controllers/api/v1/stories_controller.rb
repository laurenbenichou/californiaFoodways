class Api::V1::StoriesController < ApplicationController

  def index
    @stories = Story.all
  end

end