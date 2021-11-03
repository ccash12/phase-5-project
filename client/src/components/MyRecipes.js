import {useState,useEffect} from 'react';
import RecipeCard from './RecipeCard'

function MyRecipes() {
    const [myRecipes, setMyRecipes] = useState([])
    const myRecipeList = myRecipes.map(myRecipe => 
        <RecipeCard recipeObj={myRecipe} key={myRecipe.id}>
            <button onClick={() => handleRemoveRecipe(myRecipe)}>Remove From My Recipes</button><br /><br />
            <button >Add to My Recipes</button>
        </RecipeCard>);
        
        useEffect(() => {
            fetch(`http://localhost:3000/myrecipes`)
            .then(resp => resp.json())
            .then(myRecipeArray => setMyRecipes(myRecipeArray))
        },[]);
    
        function handleRemoveRecipe(recipeObj) {
            fetch(`http://localhost:3000/myrecipes/${recipeObj.id}`, {
                method: 'DELETE'})
            .then(setMyRecipes(myRecipes.filter(myRecipe => myRecipe.id !== recipeObj.id)))
        };


    return(
        <div>

        </div>
    )
}

export default MyRecipes;