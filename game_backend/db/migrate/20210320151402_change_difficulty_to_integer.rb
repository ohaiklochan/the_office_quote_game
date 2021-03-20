class ChangeDifficultyToInteger < ActiveRecord::Migration[6.1]
  def change
    change_column :questions, :difficulty, :integer
  end
end
