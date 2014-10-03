class CreateCourses < ActiveRecord::Migration
	def change
		create_table :courses do |t|
			t.string :name
			t.text :short_description
			t.text :full_description
			t.string :background_color
			t.timestamps
		end
	end
end
