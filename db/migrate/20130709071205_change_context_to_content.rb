class ChangeContextToContent < ActiveRecord::Migration
  def up
    rename_column :posts, :context, :content
  end

  def down
    rename_column :posts, :content, :context
  end
end
