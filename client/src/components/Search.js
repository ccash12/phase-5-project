import React from 'react'

function Search({searchRecipes,setSearchRecipes}) {
    return(
        <div className='searchbar'> 
            <input
                type="text"
                id="search"
                placeholder="Search by Recipe"
                vaule={searchRecipes}
                onChange={(e) => setSearchRecipes(e.target.value)}
            />

        </div>
    )
}

export default Search; 