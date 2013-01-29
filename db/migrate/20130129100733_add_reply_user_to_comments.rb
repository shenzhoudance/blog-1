class AddReplyUserToComments < ActiveRecord::Migration
  def change
    add_column :comments, :reply_user, :string
  end
end
