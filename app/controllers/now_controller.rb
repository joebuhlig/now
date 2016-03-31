class NowController < ApplicationController
	def index
		@page = params["page"] || "hello"
	end

	def get
		@page = params["page"] || "hello"
		render partial: @page
	end
end
