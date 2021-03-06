import React from 'react'
import { Link } from "react-router-dom"

function NavBar( {user, setUser} ) {
    
    function handleLogout(){
        fetch('/logout', {
            method: "DELETE", 
        })
        .then(response => {
            if(response.ok){
                setUser(null)
            }
        })
    }
    
    return(
        <header>
            <div className="NavBarContainer"> 
                <div className="NavBarTitle">
                <Link to="/">
                    <h1 className="Title">A Couple of Cooks</h1>
                </Link>
                </div>
                <div className="navBarLinks"> 
                {user ? (
                        <>
                            <button className="LogOutButton" onClick={handleLogout}>Log Out</button>
                            <Link to='/recipes/myrecipes'> 
                                <h3>My Recipes</h3>
                            </Link> 
                            <Link to ='/addrecipe'>
                                Add Recipe
                            </Link>
                            {/* <Link to="/ingredients/myingredients">
                                <h3>My Ingredients</h3>
                            </Link> */}
                        </>
                    ) : (
                    <div className="NavBarInside">
                        <Link to='/signup' className="SignUpLink">
                            Sign Up
                        </Link>
                        <Link to="/login" className="LoginLink"> 
                            Log In
                        </Link>
                    </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default NavBar; 