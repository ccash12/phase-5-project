class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :user
  has_one :recipe
end
