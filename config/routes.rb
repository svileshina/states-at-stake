Rails.application.routes.draw do

	resources :graph

	root 'map#index'

end
