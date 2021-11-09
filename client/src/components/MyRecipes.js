import { useState, useEffect } from 'react'
import RecipeCard from "./RecipeCard";


function MyRecipes() {

    const [recipesArray, setRecipesArray] = useState([])
    
    useEffect(() => {
        fetch('/recipes/my_recipes')
        .then((response) => response.json())
        .then((data) => setRecipesArray(data))
    },[]
)

    const myRecipesArray = recipesArray.map(recipeObject=> 
        <RecipeCard 
            recipe={recipeObject}
        />
    )

    return(
        <div>
            {myRecipesArray}
        </div>
    )
}





export default MyRecipes;