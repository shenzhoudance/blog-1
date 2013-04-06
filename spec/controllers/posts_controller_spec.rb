require "spec_helper"

describe PostsController do
  describe "Get index" do
   it "assigns @posts" do
    post = Post.create
    get :index
    assigns(:posts).should eq([post])
  end
  it "renders the index template" do
    get :index
    response.should render_template("index")
  end
 end
end
