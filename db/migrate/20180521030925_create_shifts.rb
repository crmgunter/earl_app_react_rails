class CreateShifts < ActiveRecord::Migration[5.1]
  def change
    create_table :shifts do |t|
      t.string :date
      t.string :time
      t.string :note
      t.string :employees

      t.timestamps
    end
  end
end
