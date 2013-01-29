class Comment < ActiveRecord::Base
  belongs_to :post
  attr_accessible :context, :name, :parent_id, :reply_user
  has_many :son_comments, :class_name => 'Comment', :foreign_key => 'parent_id'
end
