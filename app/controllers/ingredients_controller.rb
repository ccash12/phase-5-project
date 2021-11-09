class IngredientsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index 
        ingredients = Ingredient.all
        render json: ingredients
    end
end
