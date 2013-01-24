class TagsController < ApplicationController
  layout "colorless"
  
  def tag_posts
    @tag = Tag.find(params[:id])
    @posts = @tag.posts.order("created_at desc").page(params[:page]).per(10)
    @tags = Tag.all
  end
  
end
