class Admin::TagsController < Admin::ApplicationController
  
  def create
    respond_to do |f|
      f.js {
        @tag = Tag.new(params(:tag))  
              
        unless @tag.save
          render :text => :error, :status => :unprocessable_entity
        end
      }
    end
  end
  
  def destroy
    
  end
end