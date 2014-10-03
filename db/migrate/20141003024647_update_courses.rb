class UpdateCourses < ActiveRecord::Migration
  def change
  	change_table :courses do |t|
      t.rename :description, :short_description
      t.string :full_description, :limit => 1024
    end
  end
end
