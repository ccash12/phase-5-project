Rails.application.routes.draw do
  # resources :recipe_ingredients
  # resources :ingredients
  resources :recipes, only: [:index, :show, :create]
  # resources :users

  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"

end