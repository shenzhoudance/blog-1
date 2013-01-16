class Post < ActiveRecord::Base
  attr_accessible :content, :title
  has_many :post_tag_mappings
  has_many :tags, :through => :post_tag_mappings
  
end
