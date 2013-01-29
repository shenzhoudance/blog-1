class CommentsController < ApplicationController
  def create
    respond_to do |f|
      f.js{
        @post = Post.find(params[:post_id])
        @comment = @post.comments.new(params[:comment])
        
        unless @comment.save
          render :text => :error, :status => :unprocessable_entity
        end
      }
    end
  end
end
