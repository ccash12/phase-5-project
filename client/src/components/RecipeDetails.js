import React, {useEffect,useState} from 'react';
import { useParams, useHistory} from 'react-router-dom';

function RecipeDetails(){
    const [recipe,setRecipe] = useState({});
    const [isLoaded, setIsLoaded] = useState(false)

    const id = useParams().id
    let history = useHistory();
    
    useEffect(() => {
        fetch(`/recipes/${id}`)
        .then(resp => resp.json())
        .then((recipe) => {
            setRecipe(recipe);
            setIsLoaded(true);
        })
    },[id]);

    if(!isLoaded) return <h1>Loading...</h1>

    const {name, cuisine, meal, rating, description, image} = recipe;

    return(
        <div className="petDetails">
            <img src={image} alt={name} />
            <h1>{`${name}`}</h1>
            <ul>
                <li>{cuisine}</li>
                <li>{meal}</li>
                <li>{rating}</li>
                <li>{description}</li>
            </ul>
            
        </div>
    
    )}



export default RecipeDetails;