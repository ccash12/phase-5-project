import React from 'react'
import {useState} from 'react'
import RecipeCard from './RecipeCard'

function RecipeList({displayRecipes}) {
    


    const displayRecipeArray = displayRecipes.map(recipe =>
        <RecipeCard    
            key={recipe.id}
            recipe={recipe} 
        />
        )

    return(
        <div clasName="recipe-list"> 
            {displayRecipeArray}
        </div>
    )
}

export default RecipeList; 