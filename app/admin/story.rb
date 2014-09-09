ActiveAdmin.register Story do
  index do
    selectable_column
    column :id
    column :title
    column :track_id
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
      f.input :track_id
      f.input :author
      f.input :location
      f.input :published
    end

    f.buttons
  end
end
