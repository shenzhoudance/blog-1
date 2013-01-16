class Admin::PostsController < Admin::ApplicationController
  
  def index
    @posts = Post.all
  end
  def new
    @post = Post.new
  end
  
  def create
    @post = Post.new(params[:post])
    
    if @post.save
      redirect_to admin_posts_path, notice: 'A new post was created successfully!'
    else
      flash[:error] = 'something error.'
      render :new
    end
  end
  
end
