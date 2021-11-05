import {useState} from 'react'

function NewRecipeForm({newRecipeInput, getRecipes, setGetRecipes}) {
    const [name,setName] = useState("")
    const [cuisine,setCuisine] = useState("")
    const [meal,setMeal] = useState("")
    const [rating,setRating] = useState("")
    const [description,setDescription] = useState("")
    const [image, setImage] = useState("")

    

    function handleSubmit(e) {
        console.log("submitting")
        e.preventDefault();
        fetch('/recipes', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            name:name,
            cuisine:cuisine,
            meal:meal,
            rating:rating,
            description:description,
            image:image
            }), 
        })
        .then(resp => resp.json())
        .then((newRecipe) => handleAddRecipe(newRecipe))
    };
    

        function handleAddRecipe(newRecipe) {
        const updatedRecipeArray = [...getRecipes, newRecipeInput]
        setGetRecipes(updatedRecipeArray)
    }
    


    return(
        <div className="NewRecipeForm">
                <h3>Add New Recipe:</h3>
            <form onSubmit={handleSubmit}> 
                <input 
                    type="text" 
                    name='name'
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="text" 
                    name='cuisine'
                    placeholder="cuisine"
                    value={cuisine}
                    onChange={(e) => setCuisine(e.target.value)}
                />
                <input 
                    type="text" 
                    name='meal'
                    placeholder="meal"
                    value={meal}
                    onChange={(e) => setMeal(e.target.value)}
                />
                <input 
                    type="text" 
                    name='rating'
                    placeholder="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
                <input 
                    type="text" 
                    name='description'
                    placeholder="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input 
                    type="text" 
                    name='image'
                    placeholder="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <button type="submit">Submit New Recipe!</button>
            </form>
        </div>
    )
}

export default NewRecipeForm;