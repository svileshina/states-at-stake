Rails.application.routes.draw do

	root 'map#index'
	resources :states, only: :show
end
