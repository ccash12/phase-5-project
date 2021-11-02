import { useState, useEffect } from "react";
import { Switch, Route} from "react-router-dom"

import './App.css';

import NavBar from './components/NavBar'
import Login from './components/Login'
import Home from './components/Home'
import Signup from './components/Signup'


function App() {
  const [user,setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((user) => setUser(user));
  }, []);

  return (
    <div className="App">
      <NavBar
        user={user}
        setUser={setUser}
      />
      <main>
          <Switch>
            <Route exact path='/'>
              <Home 
                user = {user}
                />
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
