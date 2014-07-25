class Story < ActiveRecord::Base
  attr_accessible :admin_id, :author, :content, :image, :published, :soundcloud_url, :tags, :title, :story_type
end
