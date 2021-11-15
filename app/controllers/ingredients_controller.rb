class IngredientsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    # def index 
    #     ingredients = Ingredient.all
    #     render json: ingredients
    # end

    # def my_ingredients
    #     user = @current_user
    #     render json: user.ingredients, status: :ok
    # end
end
