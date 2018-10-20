Rails.application.routes.draw do

	# resources :graph

	root 'map#index'
	# resources :states, only: :show

	resources :arkansas, only: :index
	resources :washington, only: :index
end
