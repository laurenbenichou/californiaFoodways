class Story < ActiveRecord::Base
  attr_accessible :author_id, :author, :location, :content, :image, :published, :soundcloud_url, :tags, :title, :story_type

  belongs_to :author
  has_one :location
end
