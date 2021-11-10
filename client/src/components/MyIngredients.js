import { useState, useEffect } from 'react'
import IngredientCard from './IngredientCard'

function MyIngredients() {

    const [getIngredients, setGetIngredients] = useState('')
    const [ingredientsArray, setIngredientsArray] = useState('')

    useEffect(() => {
        fetch("/ingredients")
        .then(r => r.json())
        .then(ingredients => {
            setGetIngredients(ingredients)})
    },[setGetIngredients])

    

    useEffect(() => {
        fetch('/ingredients/my_ingredients')
        .then((response) => response.json())
        .then((data) => setIngredientsArray(data))
    },[]
)

    // const myIngredientsArray = ingredientsArray.map(ingredientObject => 
    //     <IngredientCard 
    //             getIngredients={getIngredients}
    //             ingredient={ingredientObject}
    //         /> 
    //     )


    return(
        <div>
            {/* {myIngredientsArray} */}
        </div>
    )
}

export default MyIngredients;