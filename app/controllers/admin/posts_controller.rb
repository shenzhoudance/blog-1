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
  
  def edit
    @post = Post.find(params[:id])
  end
  
  def update
    @post = Post.find(params[:id])
    
    if @post.update_attributes(params[:post])
      redirect_to admin_posts_path, notice: 'Update successfully!'
    else
      render action: "edit"
      flash[:alert] = 'update error!'
    end
  end
  
  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    
    respond_to do |format|
      format.html { redirect_to admin_posts_path }
      format.json { head :no_content }
    end
    
  end
end
