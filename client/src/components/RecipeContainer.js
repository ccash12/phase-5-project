import React from 'react'
import Search from './Search'
import RecipeList from './RecipeList'
import ImageSlider from './ImageSlider'
import NewRecipeForm from './NewRecipeForm'
import {useState,useEffect} from "react";

function RecipeContainer({getRecipes,setGetRecipes,newRecipeInput,setNewRecipeInput}) {
    const [searchRecipes,setSearchRecipes] = useState('')
    
    
    useEffect(() => {
        fetch("/recipes")
        .then(r => r.json())
        .then(recipes => setGetRecipes(recipes))
    }, [setGetRecipes]);
    

    
    const displayRecipes = getRecipes.filter((recipe) => {
        return recipe.name.toLowerCase().includes(searchRecipes.toLowerCase())
    })

    console.log(displayRecipes)
    return(
        <div> 
            <ImageSlider />
            {/* <NewRecipeForm
                getRecipes={getRecipes}
                setSearchRecipes={setSearchRecipes}
                newRecipeInput={newRecipeInput}
            /> */}
            <Search 
                searchRecipes={searchRecipes}
                setSearchRecipes={setSearchRecipes}
            /> 

            <RecipeList 
                displayRecipes={displayRecipes}
                getRecipes={getRecipes}
                newRecipeInput={newRecipeInput}
            /> 

        </div>
    )
}

export default RecipeContainer; 