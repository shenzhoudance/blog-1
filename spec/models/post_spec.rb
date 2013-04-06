require "spec_helper"

describe Post do
  context "with 2 or more comments" do
    it "orders them in reverse chronologically" do
      post = Post.create!
      comment1 = post.comments.create!(:name => "huachang", :context => "first comment.")
      comment2 = post.comments.create!(:name => "hanluner", :context => "second comment.")
      expect(post.reload.comments).to eq([comment1, comment2])
    end
  end
end
