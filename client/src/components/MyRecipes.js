import { useState, useEffect } from 'react'
import RecipeCard from "./RecipeCard";

function MyRecipes({myRecipeData,handleRecipeData,handleRemoveRecipeList}) {
    
    const displayMyRecipeData = myRecipeData.map(eachProduct =>
        <RecipeCard 
            key={eachProduct.id} 
            eachProduct={eachProduct} 
            handleRecipeData={handleRecipeData}
            handleRemoveRecipeList={handleRemoveRecipeList} 
        />
    )

    return( 
        <div>
            
        </div>
    )
}







// {
//     const [myRecipes, setMyRecipes] = useState([]);
//     const myRecipesList = myRecipes.map(myRecipe => 
//         <RecipeCard recipeObj={myRecipe} key={myRecipe.id}>
//             <button onClick={() => handleRemoveRecipe(myRecipe)}>Remove From My Recipes</button><br /><br />
//             <button id='takehome'>Add to My Recipes</button>
//         </RecipeCard>);

//     useEffect(() => {
//         fetch(`http://localhost:3000/myrecipes`)
//         .then(resp => resp.json())
//         .then(myRecipesArray => setMyRecipes(myRecipesArray))
//     },[]);

//     function handleRemoveRecipe(recipeObj) {
//         fetch(`http://localhost:3000/myrecipes/${recipeObj.id}`, {
//             method: 'DELETE'})
//         .then(setMyRecipes(myRecipes.filter(myRecipe => myRecipe.id !== recipeObj.id)))
//     };

//     return (
//         <div>
//             <h2 id='title'>My Recipes</h2>
//             {myRecipesList}
//         </div>
//     );
// };

export default MyRecipes;