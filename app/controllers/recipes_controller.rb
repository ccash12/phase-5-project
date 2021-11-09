class RecipesController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]

    def index
        recipes = Recipe.all
        render json: recipes
    end

    def show
        recipe = Recipe.find_by(id: params[:id])
        render json: recipe
    end

    def create 
        recipe = Recipe.new(recipe_params)
        if recipe.save 
            render json: recipe, status: :created
        else
            render json: {error: "validation errors"}, status: :unprocessable_entity
        end
    end

    def my_recipes
        user = @current_user
        render json: user.recipes, status: :ok
    end

    private

    def recipe_params
        params.permit(:name, :cuisine, :meal, :rating, :description, :image, :user_id)
    end

end
