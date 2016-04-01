class NowController < ApplicationController
	def index
		pages = ['hello', 'time', 'reading', 'development', 'history']
		@page = params["page"] || "hello"
		unless pages.include? @page
			redirect_to root_path
		end
	end

	def get
		@page = params["page"] || "hello"
		render partial: @page
	end
end
