class RecipesController < ApplicationController
    skip_before_action :authorize

    def index
        recipes = Recipe.all
        render json: recipes
    end

    def show
        recipe = Recipe.find_by(id: params[:id])
        render json: recipe
    end

end
