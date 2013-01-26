class ApplicationController < ActionController::Base
  protect_from_forgery  
  
  def find_tags
    @tags = Tag.all
  end
end
