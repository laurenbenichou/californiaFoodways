class Author < ActiveRecord::Base
  attr_accessible :first_name, :last_name

  has_many :stories

   def to_s
    "#{first_name} #{last_name}"
  end
end
