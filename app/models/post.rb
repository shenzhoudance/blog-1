class Post < ActiveRecord::Base
  attr_accessible :content, :title, :slug
  has_many :post_tag_mappings
  has_many :tags, :through => :post_tag_mappings
  
  #extend FriendlyId
  #friendly_id :title, :use => :slugged
  
end
