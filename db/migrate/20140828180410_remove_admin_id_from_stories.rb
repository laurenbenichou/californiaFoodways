class RemoveAdminIdFromStories < ActiveRecord::Migration
  def up
    remove_column :stories, :admin_id
  end

  def down
    add_column :stories, :admin_id, :string
  end
end
