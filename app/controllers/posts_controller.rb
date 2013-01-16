class PostsController < ApplicationController
  #before_filter :authenticate_admin!, :only => [:new, :create, :edit, :update]
  
  def show
    @post = Post.find(params[:id])
  end
  
  def edit
    
  end
end
