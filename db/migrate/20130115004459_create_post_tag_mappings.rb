class CreatePostTagMappings < ActiveRecord::Migration
  def change
    create_table :post_tag_mappings do |t|
      t.references :post
      t.references :tag

      t.timestamps
    end
    add_index :post_tag_mappings, :post_id
    add_index :post_tag_mappings, :tag_id
  end
end
