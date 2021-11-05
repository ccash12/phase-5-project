import React from 'react'
import RecipeContainer from "./RecipeContainer"
import NewRecipeForm from "./NewRecipeForm"



function Home({user,getRecipes,setGetRecipes,newRecipeInput,setNewRecipeInput}) {
    if (user) {
        return (
            <>
                <RecipeContainer 
                    getRecipes={getRecipes}
                    setGetRecipes={setGetRecipes}
                    newRecipeInput={newRecipeInput}
                    setNewRecipeInput={setNewRecipeInput}
                    
                />

                <NewRecipeForm
                    newRecipeInput={newRecipeInput}
                    setNewRecipeInput={setNewRecipeInput}
                    getRecipes={getRecipes}
                    setGetRecipes={setGetRecipes}
                />
            </>
        )
    } else {
        return (
            <>
                <div className="Home">
                    <RecipeContainer 
                        getRecipes={getRecipes}
                        setGetRecipes={setGetRecipes}
                    />
                </div>
            </>
        )
    }
}

export default Home; 