class Post < ActiveRecord::Base
  attr_accessible :content, :slug, :title
  #mount_uploader :file, ImageUploader

  has_many :post_tag_mappings
  has_many :tags, :through => :post_tag_mappings
  has_many :comments

  #validates :slug, :presence => true
end
