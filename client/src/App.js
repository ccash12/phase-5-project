import { useState, useEffect } from "react";
import { Switch, Route} from "react-router-dom"


import './App.css';

import NavBar from './components/NavBar'
import Login from './components/Login'
import Home from './components/Home'
import Signup from './components/Signup'
import NewRecipeForm from "./components/NewRecipeForm";
import MyRecipes from "./components/MyRecipes"
import RecipeDetails from "./components/RecipeDetails"


function App() {
  const [user,setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState([])
  const [getRecipes,setGetRecipes] = useState([])
  const [myRecipeData, setMyRecipeData] = useState([])


  useEffect(() => {
    fetch("http://localhost:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, []);
  
  function handleRecipeData(productData) {
    const exist = myRecipeData.find(x => x.id === productData.id)
    if (exist) {
      setMyRecipeData(myRecipeData.map(x => x.id === productData.id ? {...exist, qty: exist.qty + 1} : x))
    } else {
      setMyRecipeData([...myRecipeData, {...productData, qty: 1}])
    }
  }

  function handleRemoveRecipeList(productData) {
    const exist = myRecipeData.find(x => x.id === productData.id)
    if (exist.qty === 1) {
      setMyRecipeData(myRecipeData.filter(x => x.id !== myRecipeData.id))
    } else {
      setMyRecipeData(myRecipeData.map(x => x.id === productData.id ? {...exist, qty: exist.qty - 1} : x))
    }
  }


  

  return (
    <div className="App">
      <NavBar
        user={user}
        setUser={setUser}
      />
      <main>
        {user ? (
          <Switch>
            <Route exact path='/'>
              <Home 
                user = {user}
                getRecipes = {getRecipes}
                setGetRecipes={setGetRecipes}
                />
            </Route>
            <Route path="/recipes/mine">
              <MyRecipes 
                myRecipeData={myRecipeData}
                handleRecipeData={handleRecipeData}
                handleRemoveRecipeList={handleRemoveRecipeList}
              />
            </Route>
            </Switch>
            ) : (
            <Switch>
            <Route path='/signup'>
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
            <Route>
              <Home exact path='/'
                user = {user}
                getRecipes = {getRecipes}
                setGetRecipes={setGetRecipes}
              />
            </Route>
            </Switch>
            )}
      </main>
    </div>
  );
}

export default App;
