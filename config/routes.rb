Rails.application.routes.draw do
  root 'home#index'
  resources :widgets, only: :index
end
