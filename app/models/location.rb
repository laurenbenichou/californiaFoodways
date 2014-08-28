class Location < ActiveRecord::Base
  attr_accessible :county
  belongs_to :story

  def to_s
    "#{county}"
  end
end
