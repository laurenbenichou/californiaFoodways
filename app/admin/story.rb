ActiveAdmin.register Story do
  index do
    selectable_column
    column :id
    column :title
    column :soundcloud_url
    column :tags
    column :story_type
    column :published
    column :location
    actions
  end

  form :html => { :enctype => "multipart/form-data" } do |f|
    f.inputs 'Details', :multipart => true do
      f.input :title
      f.input :content, :as => :text
      f.input :soundcloud_url
      f.input :author
      f.input :location
      f.input :published
    end

    f.inputs 'Images' do
      f.input :image, :label => 'Post Image'
    end

    f.buttons
  end
end
