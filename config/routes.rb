Rails.application.routes.draw do

	resources :graph

	root 'map#index'
	resources :states, only: :show
end
