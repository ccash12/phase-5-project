class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :cuisine
      t.string :meal
      t.string :rating
      t.string :description

      t.timestamps
    end
  end
end
