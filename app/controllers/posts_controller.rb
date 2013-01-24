class PostsController < ApplicationController   
  layout "colorless"
  
  def index
    @posts = Post.order("created_at desc").page(params[:page]).per(5)
    @tags = Tag.all
    
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @posts }      
    end
  end

  def show
    @post = Post.find_by_slug(params[:slug])
    @tags = Tag.all
    
    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @post }      
    end
  end

end
