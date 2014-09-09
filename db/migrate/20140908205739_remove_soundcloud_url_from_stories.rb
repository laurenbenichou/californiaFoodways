class RemoveSoundcloudUrlFromStories < ActiveRecord::Migration
  def up
    remove_column :stories, :soundcloud_url
  end

  def down
    add_column :stories, :soundcloud_url, :string
  end
end
