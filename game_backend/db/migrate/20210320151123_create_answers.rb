class CreateAnswers < ActiveRecord::Migration[6.1]
  def change
    create_table :answers do |t|
      t.text :content
      t.boolean :correct
      t.references :question

      t.timestamps
    end
  end
end
