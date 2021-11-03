import React from 'react'

function Search({searchRecipes,setSearchRecipes}) {
    return(
        <div className='searchbar'> 
            <input
                type="text"
                id="search"
                placeholder="Search by Ingredient"
                vaule={searchRecipes}
                onChange={(e) => setSearchRecipes(e.target.value)}
            />

        </div>
    )
}

export default Search; 