class CreateEmployees < ActiveRecord::Migration[5.1]
  def change
    create_table :employees do |t|
      t.string :name
      t.string :position
      t.references :shift, foreign_key: true
      t.string :phone
      t.string :photo

      t.timestamps
    end
  end
end
