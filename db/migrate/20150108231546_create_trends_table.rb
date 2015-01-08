class CreateTrendsTable < ActiveRecord::Migration
  def change
  	create_table :trends do |t|
  	t.text :name, null: false

  	t.timestamps
  	end
  end
end
