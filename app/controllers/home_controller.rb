class HomeController < ApplicationController
	def index
		@courses = Course.all
		@news = New.take(3)
		@events = Event.take(6)
	end
end
