import React from 'react'
import { useState } from 'react'
import { useHistory} from 'react-router-dom'

function Login( {errors, setErrors, setUser, setIsLoading} ) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault()
        setIsLoading(true)
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({email,password})
        }).then((r) => {
            if (r.ok) {
                setIsLoading(false)
                r.json().then((user) => setUser(user))
                history.push('/')
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }
    
    
    return(
        <div className="LogInContainer"> 
            <div className="LoginImageContainer">
                <img src="https://media.istockphoto.com/photos/shopping-bag-full-of-fresh-vegetables-and-fruits-picture-id1128687123?k=20&m=1128687123&s=612x612&w=0&h=qEa-vkegksLHETe-zuGsWNqhQQI7VwofTbwSpcaNvrU="
                alt="login image"
                />
            </div>
            <div className="LoginFormContainer">
                <form className="loginForm" onSubmit={handleSubmit}> 
                    <label>Email:</label>
                    <input className="loginInput"
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password:</label>
                    <input className="loginInput"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        vaule={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="loginButton" type="submit">Login</button>
                    {errors.map((err) => (
                    <div className="LogInError" key={err}>{err}</div>))} 
                </form>
            </div>
        </div>
    )
}

export default Login; 