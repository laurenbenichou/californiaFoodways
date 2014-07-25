class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.string :title
      t.text :content
      t.string :soundcloud_url
      t.string :author
      t.integer :admin_id
      t.string :tags
      t.boolean :published
      t.string :type
      t.string :image

      t.timestamps
    end
  end
end
