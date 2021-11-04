function NewRecipeForm({newRecipeInput,setNewRecipeInput,handleSubmit}) {
    const {name,cuisine,meal,rating,description,image} = newRecipeInput

    return(
        <div>
                <h3>Add New Recipe:</h3>
            <form onsubmit={handleSubmit}> 
                <input 
                    type="text" 
                    name='name'
                    placeholder="name"
                    value={name}
                    onChange={e => setNewRecipeInput({...newRecipeInput, [e.target.name]: e.target.value})}
                />
                <input 
                    type="text" 
                    name='cuisine'
                    placeholder="cuisine"
                    value={cuisine}
                    onChange={e => setNewRecipeInput({...newRecipeInput, [e.target.name]: e.target.value})}
                />
                <input 
                    type="text" 
                    name='meal'
                    placeholder="meal"
                    value={meal}
                    onChange={e => setNewRecipeInput({...newRecipeInput, [e.target.name]: e.target.value})}
                />
                <input 
                    type="text" 
                    name='rating'
                    placeholder="rating"
                    value={rating}
                    onChange={e => setNewRecipeInput({...newRecipeInput, [e.target.name]: e.target.value})}
                />
                <input 
                    type="text" 
                    name='description'
                    placeholder="description"
                    value={description}
                    onChange={e => setNewRecipeInput({...newRecipeInput, [e.target.name]: e.target.value})}
                />
                <input 
                    type="text" 
                    name='image'
                    placeholder="image"
                    value={image}
                    onChange={e => setNewRecipeInput({...newRecipeInput, [e.target.name]: e.target.value})}
                />
                <button>Submit New Recipe!</button>
            </form>
        </div>
    )
}

export default NewRecipeForm;