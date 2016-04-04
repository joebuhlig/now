class NowController < ApplicationController
	def index
		pages = ['hello', 'time', 'reading', 'development', 'work', 'error']
		@page = params["page"] || "hello"
		unless pages.include? @page
			redirect_to "/error"
		end
	end

	def get
		@page = params["page"] || "hello"
		render partial: @page
	end
end
