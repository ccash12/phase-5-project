class ProductsController < ApplicationController
    skip_before_action :authorize

    def index
        recipes = Recipe.all
        render json: products
    end

    def show
        recipe = Recipe.find_by(id: params[:id])
        render json: product
    end

end
