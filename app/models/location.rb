class Location < ActiveRecord::Base
  attr_accessible :county
  has_one :story

  def to_s
    "#{county}"
  end
end
