class Admin::PostsController < Admin::ApplicationController
  
  # GET /posts
  # GET /posts.json
  def index
    @posts = Post.order("created_at desc").page(params[:page]).per(10)

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @posts }
      
    end
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
    @post = Post.find_by_slug(params[:slug])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @post }      
    end
  end
  
  def new
    @post = Post.new
    @tags = Tag.all
    
    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @post }
    end
  end

  def edit
    @post = Post.find(params[:id])
    @tags = Tag.all
  end

  def create
    @post = Post.new(params[:post])
    tags = params[:tags]
    
    respond_to do |format|
      if @post.save
        @post.tag_ids = tags
        format.html { redirect_to admin_slug_path(@post.slug), notice: 'Post was successfully created.' }
        format.json { render json: @post, status: :created, location: @post }
      else
        format.html { render action: "new" }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @post = Post.find(params[:id])
    tags = params[:tags]
    
    respond_to do |format|
      if @post.update_attributes(params[:post])
         @post.tag_ids = tags
        format.html { redirect_to admin_slug_path(@post.slug), notice: 'Post was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
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
  
  def upload
    #debugger
    uploader = ImageUploader.new
    
    if uploader.store!(params[:file])
      render :json => {:filelink => "/uploads/blog/pictures/#{params[:file].original_filename}"}
    else
      render json: 'upload error', status: :unprocessable_entity 
    end
      
  end
end
