class AddLocationIdToStories < ActiveRecord::Migration
  def change
    add_column :stories, :location_id, :integer
  end
end
