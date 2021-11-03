import React from 'react'

function RecipeCard({recipe}) {
    const { name, cuisine, meal, rating, description, image} = recipe

    console.log(image)

    return(
        <div className="recipe-card"> 
            <img className="cardImg" src={image} alt="image"/>
            <h3>{name}</h3>
            <h2>{cuisine}</h2>
            <h2>{meal}</h2>
            <h2>{rating}</h2>
            <h2>{description}</h2>
            <button>Add to My Recipes</button>
        </div>
    )
}

export default RecipeCard; 