import React from 'react'
import RecipeContainer from "./RecipeContainer"

function Home({user,getRecipes,setGetRecipes}) {
    if (user) {
        return (
            <>
                <RecipeContainer 
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