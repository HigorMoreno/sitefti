class New < ActiveRecord::Base
	private
	def after_find
		self.created_at = created_at.strftime("%m/%D")
	end
end
