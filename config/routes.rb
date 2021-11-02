Rails.application.routes.draw do
  # resources :recipe_ingredients
  # resources :ingredients
  resources :recipes, only: [:index, :show]
  # resources :users

  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end