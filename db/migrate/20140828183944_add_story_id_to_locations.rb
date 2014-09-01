class AddStoryIdToLocations < ActiveRecord::Migration
  def change
    add_column :locations, :story_id, :integer
  end
end
