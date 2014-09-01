class Api::V1::StoriesController < ApplicationController

  def index
    @stories = Story.all
     respond_to do |format|
      format.json { render :json => @stories }
    end
  end
end