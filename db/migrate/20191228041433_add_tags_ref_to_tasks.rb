class AddTagsRefToTasks < ActiveRecord::Migration[6.0]
  def change
    add_reference :tasks, :tags, foreign_key: true
  end
end
