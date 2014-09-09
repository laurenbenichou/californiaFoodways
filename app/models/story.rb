class Story < ActiveRecord::Base
  attr_accessible :author, :location, :author_id, :location_id, :content, :image, :published, :track_id, :tags, :title, :story_type

  belongs_to :author
  belongs_to :location

end
