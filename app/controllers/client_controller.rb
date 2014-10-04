class ClientController < ApplicationController
	def index
		@clients = Client.all
	end
end
