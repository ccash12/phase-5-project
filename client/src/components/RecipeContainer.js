import React from 'react'
import Search from './Search'
import RecipeList from './RecipeList'
import ImageSlider from './ImageSlider'
import {useState,useEffect} from "react";

function RecipeContainer({getRecipes,setGetRecipes}) {
    const [searchRecipes,setSearchRecipes] = useState('')
    
    
    
    useEffect(() => {
        fetch("/recipes")
        .then(r => r.json())
        .then(recipes => {
            setGetRecipes(recipes)})
    }, [setGetRecipes]);
        
    const displayRecipes = getRecipes.filter((recipe) => {
        return recipe.name.toLowerCase().includes(searchRecipes.toLowerCase())
    })
    
    
    return(
        <div className="recipeContainer"> 
            <ImageSlider />
            <Search 
                searchRecipes={searchRecipes}
                setSearchRecipes={setSearchRecipes}
            /> 

            <RecipeList 
                displayRecipes={displayRecipes}
                getRecipes={getRecipes}
            /> 

        </div>
    )
}

export default RecipeContainer; 