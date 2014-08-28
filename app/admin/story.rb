ActiveAdmin.register Story do
  index do
    column :author
    column :title
    column :soundcloud_url
    column :tags
    column :story_type
    column :location
    column :published
  end
end
