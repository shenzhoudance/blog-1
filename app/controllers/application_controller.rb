class ApplicationController < ActionController::Base
  protect_from_forgery
  
  @tags = Tag.all
  private
  def after_user_sign_out_path_for(resource_or_scope)
      home_path
  end
end
