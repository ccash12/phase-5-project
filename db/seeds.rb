Ingredient.destroy_all 
Recipe.destroy_all 
User.destroy_all 


puts "🌱 Seeding recipes ..."

i1 = Ingredient.create(name: "Garlic")
i2 = Ingredient.create(name: "Red Onion")
i3 = Ingredient.create(name: "Pepper")
i1 = Ingredient.create(name: "Salt")

u1 = User.create(first_name: "Courtney", last_name: "Cash" email: "courtney@gmail.com")

r1 = Recipe.create(name:"Spaghetti and Meatballs", cuisine: "Italian", meal: "dinner", rating:"4/5", description:"long pasta with red sauce and meatballs")

puts "✅ Done seeding!"