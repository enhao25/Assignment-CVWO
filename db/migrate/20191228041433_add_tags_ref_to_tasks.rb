class AddTagsRefToTasks < ActiveRecord::Migration[6.0]
  def change
    add_reference :tasks, :Tags, foreign_key: true
  end
end
