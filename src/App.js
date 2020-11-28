import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import Chips from "./components/items/Chips";
import Detergent from "./components/items/Detergent";
import FrozenFoods from "./components/items/FrozenFoods";
import Landing from "./components/Landing";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const checkAuth = async () => {
    if (localStorage.getItem("token")) {
      setIsAuth(true);
    }
  };
  useEffect(() => {
    checkAuth();
  }, [isAuth]);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login">
            {!isAuth ? <Login setIsAuth={setIsAuth} /> : <Redirect to="/" />}
          </Route>
          <Route path="/register">
            {!isAuth ? (
              <Register setIsAuth={setIsAuth} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>

          <Route path="/chips" component={Chips} />
          <Route path="/detergent" component={Detergent} />
          <Route path="/frozenFoods" component={FrozenFoods} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
