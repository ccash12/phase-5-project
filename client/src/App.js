import { useState, useEffect } from "react";
import { Switch, Route} from "react-router-dom"


import './App.css';

import NavBar from './components/NavBar'
import Login from './components/Login'
import Home from './components/Home'
import Signup from './components/Signup'
import NewRecipeForm from "./components/NewRecipeForm";
import MyRecipes from "./components/MyRecipes"

function App() {
  const [user,setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState([])
  const [getRecipes,setGetRecipes] = useState([])
  const [newRecipeInput, setNewRecipeInput] = useState({ name:'', cuisine: '', meal:'', description:'', rating: '',image:'' })



  useEffect(() => {
    fetch("http://localhost:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, []);

  function handleSubmit(e) {
    e.preventDefault()
    setNewRecipeInput(newRecipeInput)
    fetch(`http://localhost:3000/recipes`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newRecipeInput)})
    .then(resp => resp.json())
    .then(newRecipe => setGetRecipes([...getRecipes, newRecipe]))
    console.log(newRecipeInput)
    setNewRecipeInput({name:'', cuisine: '', meal:'', description:'', rating: '',image:''  });
  };
  

  return (
    <div className="App">
      <NavBar
        user={user}
        setUser={setUser}
      />
      <NewRecipeForm
        newRecipeInput={newRecipeInput}
        setNewRecipeInput={setNewRecipeInput}
        handleSubmit={handleSubmit}
        />
      <main>
          <Switch>
            <Route exact path='/'>
              <Home 
                user = {user}
                getRecipes = {getRecipes}
                setGetRecipes={setGetRecipes}
                />
            </Route>
            <Route path='/recipes/mine'> 
              component={MyRecipes}
            </Route>
            <Route exact path = '/signup'>
              <Signup 
                setUser={setUser}
                errors={errors}
                setErrors={setErrors}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                />
            </Route>
            <Route path='/login'> 
              <Login
                setUser={setUser}
                errors={errors}
                setErrors={setErrors}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              /> 
            </Route>
            </Switch>
      </main>
    </div>
  );
}

export default App;
