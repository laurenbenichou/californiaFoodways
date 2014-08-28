class RemoveAuthorFromStories < ActiveRecord::Migration
  def up
    remove_column :stories, :author
  end

  def down
    add_column :stories, :author, :string
  end
end
