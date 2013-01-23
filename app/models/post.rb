class Post < ActiveRecord::Base
  attr_accessible :context, :slug, :title
end
