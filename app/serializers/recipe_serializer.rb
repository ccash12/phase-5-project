class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :cuisine, :meal, :rating, :description, :image
end
