import React from 'react'

function RecipeCard({recipe, handleRecipeData}) {
    const { name, cuisine, meal, rating, description, image} = recipe

    console.log(image)

    return(
        <div className="recipe-card"> 
            <img className="cardImg" src={image} alt="image"/>
            <h3>{name}</h3>
            <h4>Cuisine:{cuisine}</h4>
            <h4>Meal:{meal}</h4>
            <h4>Rating:{rating}</h4>
            <h4>Description:{description}</h4>
            <button onClick={handleRecipeData}>Add to My Recipes</button>
        </div>
    )
}

export default RecipeCard; 