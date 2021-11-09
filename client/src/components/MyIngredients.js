import { useState, useEffect } from 'react'
import IngredientCard from './IngredientCard'

function MyIngredients() {

    const [getIngredients, setGetIngredients] = useState('')

    useEffect(() => {
        fetch("/ingredients")
        .then(r => r.json())
        .then(ingredients => {
            setGetIngredients(ingredients)})
    },[])


    return(
        <div>
            <IngredientCard 
                getIngredients={getIngredients}
            /> 
        </div>
    )
}

export default MyIngredients;