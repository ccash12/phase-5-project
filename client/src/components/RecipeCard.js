import React from 'react'
import {useState} from 'react'

function RecipeCard({recipe}) {
    const { name, cuisine, meal, rating, description, image} = recipe
    

 

    return(
        <div className="recipe-card"> 
            <img className="cardImg" src={image} alt="image"/>
            <h3>{name}</h3>
            <h4>Cuisine:{cuisine}</h4>
            <h4>Meal:{meal}</h4>
            <h4>Rating:{rating}</h4>
            <div>
                <h4>Description</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default RecipeCard; 