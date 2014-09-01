class Story < ActiveRecord::Base
  attr_accessible :author_id, :location_id, :content, :image, :published, :soundcloud_url, :tags, :title, :story_type

  belongs_to :author
  belongs_to :location

  has_attached_file :image, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
end
