class AddTrackIdToStories < ActiveRecord::Migration
  def change
    add_column :stories, :track_id, :string
  end
end
