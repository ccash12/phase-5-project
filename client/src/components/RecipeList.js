import React from 'react'
import RecipeCard from './RecipeCard'

function RecipeList({displayRecipes}) {
    
    const displayRecipeArray = displayRecipes.map(recipe =>
        <RecipeCard    
            key={recipe.id}
            recipe={recipe} 
        />
        )

    return(
        <div className="recipeList"> 
            {displayRecipeArray}
        </div>
    )
}

export default RecipeList; 