puts "🌱 Seeding recipes ..."

i1 = Ingredient.create(name: "Garlic")
i2 = Ingredient.create(name: "Red Onion")
i3 = Ingredient.create(name: "Pepper")
i4 = Ingredient.create(name: "Salt")
i5 = Ingredient.create(name: "Tomato")
i6 = Ingredient.create(name: "White Onion")


u1 = User.create(first_name: "Courtney", last_name: "Cash", email: "courtney@gmail.com", password:"password")
u1 = User.create(first_name: "Caitlin", last_name: "Cash", email: "caitlin@gmail.com", password:"password")

r1 = Recipe.create(name:"Spaghetti and Meatballs", cuisine: "Italian", meal: "Dinner", rating:"4/5", description:"long pasta with red sauce and meatballs", image: "https://hips.hearstapps.com/delish/assets/17/39/1506456062-delish-spaghetti-meatballs.jpg", user_id:1)
r2 = Recipe.create(name:"Pancakes", cuisine:"American", meal: "Breakfast", rating:"3/5", description:"Fluffy", image:"https://media.eggs.ca/assets/RecipePhotos/_resampled/FillWyIxMjgwIiwiNzIwIl0/Fluffy-Pancakes-New-CMS.jpg", user_id:1)
r3 = Recipe.create(name:"Shrimp Tacos", cuisine:"Mexican", meal: "Dinner", rating:"5/5", description:"Grilled shrimp, homemade coleslaw wrapped in corn tortillas", image:"https://easyweeknightrecipes.com/wp-content/uploads/2021/02/shrimp-tacos-2.png", user_id:2)
r4 = Recipe.create(name:"BLT", cuisine:"American", meal: "Lunch", rating:"3/5", description:"Bacon, Lettuce, Tomato between two slices of bread ", image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2019%2F11%2F13%2FBLT20-20Joy20of20Cooking20-20Heidi_s20Bridge-2000.jpg&q=85", user_id:2)
r5 = Recipe.create(name:"Chocolate Chip Cookies", cuisine:"American", meal: "Dessert", rating:"3/5", description:"Warm,chewy, will melt in your mouth", image:" https://handletheheat.com/wp-content/uploads/2020/10/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9-637x637-1-550x550.jpg", user_id:2)
r6 = Recipe.create(name:"Eggplant Parmesan", cuisine:"Italian", meal: "Dinner", rating:"4/5", description:"Fried Eggplant, smothered in tomato sauce and mozzarella cheese", image:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/2/16/0/FNK_Eggplant-Parmesan-H-111_s4x3.jpg.rend.hgtvcom.616.462.suffix/1518807329709.jpeg", user_id:1)

ri1 = RecipeIngredient.create(recipe_id: 1, ingredient_id: 1)
ri2 = RecipeIngredient.create(recipe_id: 1, ingredient_id: 2)

puts "✅ Done seeding!"