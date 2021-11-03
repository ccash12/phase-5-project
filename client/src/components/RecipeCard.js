import React from 'react'

function RecipeCard({recipe}) {
    const { name, cuisine, meal, rating, description, image} = recipe

    return(
        <div className="recipe-card"> 
            <img  src={image} alt="image"/>
            <h3>{name}</h3>
            <h3>{cuisine}</h3>
            <h3>{meal}</h3>
            <h3>{rating}</h3>
            <h3>{description}</h3>
            <button>Add to My Recipes</button>
        </div>
    )
}

export default RecipeCard; 