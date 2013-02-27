class PostsController < ApplicationController
  layout "colorless"
  before_filter :find_tags

  def index
    @posts = Post.order("created_at desc").page(params[:page]).per(5)

    respond_to do |format|
      format.html # index.html.erb
      format.rss { render :layout => false }
      format.json { render json: @posts }
    end
  end

  def show
    @post = Post.find_by_slug(params[:slug])
    @comments = @post.comments
    @comment = Comment.new

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @post }
    end
  end


  def feed
    @posts = Post.order("created_at desc")
    
    respond_to do |format|
      format.html
      format.rss { render :layout => false }
    end
  end
end
