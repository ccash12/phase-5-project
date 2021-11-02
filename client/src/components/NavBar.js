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
            <div> 
                <Link to="/">
                    <h2>Recipe Website</h2>
                </Link>
            </div>
            <div> 
            {user ? (
                    <>
                        <button className="LogOutButton" onClick={handleLogout}>Log Out</button> 
                    </>
                ) : (
                <>
                    <Link to='/signup' className="SignUpLink">
                        Sign Up
                    </Link>
                    <Link to="/login" className="LoginLink"> 
                        Log In
                    </Link>
                </>
                )}
            </div>
        </header>
    )
}

export default NavBar; 