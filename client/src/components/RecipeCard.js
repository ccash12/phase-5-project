import React from 'react'

function RecipeCard({recipe}) {
    const { name, cuisine, meal, rating, description, image} = recipe

    console.log(image)

    return(
        <div className="recipe-card"> 
            <img className="cardImg" src={image} alt="image"/>
            <h3>{name}</h3>
            <h4>{cuisine}</h4>
            <h4>{meal}</h4>
            <h4>{rating}</h4>
            <h4>{description}</h4>
            <button>Add to My Recipes</button>
        </div>
    )
}

export default RecipeCard; 