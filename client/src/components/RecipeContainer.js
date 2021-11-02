import React from 'react'
import Search from './Search'
import {useState,useEffect} from "react";

function RecipeContainer({getRecipes,setGetRecipes}) {
    const [searchRecipes,setSearchRecipes] = useState('')
    
    useEffect(() => {
        fetch("/recipes")
        .then(r => r.json())
        .then(recipes => setGetRecipes(recipes))
    }, [setGetRecipes]);
    
    const displayRecipes = getRecipes.filter((recipe) => {
        return recipe.name.toLowerCase().includes(searchRecipes.toLowerCase())
    })

    return(
        <div> 
            <Search 
                searchRecipes={searchRecipes}
                setSearchRecipes={setSearchRecipes}
            /> 

            {/* <RecipeList />  */}
        </div>
    )
}

export default RecipeContainer; 