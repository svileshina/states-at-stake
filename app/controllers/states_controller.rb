class StatesController < ApplicationController
  def show
    if params[:id] == 1
      render :arkansas
    else
      render :washington
    end
	end
end
