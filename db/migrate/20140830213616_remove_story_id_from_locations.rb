class RemoveStoryIdFromLocations < ActiveRecord::Migration
  def up
    remove_column :locations, :story_id
  end

  def down
    add_column :locations, :story_id, :integer
  end
end
