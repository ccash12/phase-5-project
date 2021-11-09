Rails.application.routes.draw do
  # resources :recipe_ingredients
  # resources :users

  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  
  resources :recipes do 
    collection do 
      get 'my_recipes'
    end
  end

  resources :recipes, only: [:index, :show, :create, :my_recipes]

  resources :ingredients, only: [:index]

end