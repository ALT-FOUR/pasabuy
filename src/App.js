import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

import Index from "./components/index";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import Chips from "./components/items/Chips";
import Detergent from "./components/items/Detergent";
import FrozenFoods from "./components/items/FrozenFoods";
import Landing from "./components/Landing";
import "./app.css";

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
          <Route path="/index" component={Index} />
          <PublicRoute path="/login" restricted={false}>
            {!isAuth ? <Login setIsAuth={setIsAuth} /> : <Redirect to="/" />}
          </PublicRoute>
          <PublicRoute path="/register" restricted={false}>
            {!isAuth ? (
              <Register setIsAuth={setIsAuth} />
            ) : (
              <Redirect to="/login" />
            )}
          </PublicRoute>

          <PrivateRoute exact path="/" component={Landing} />
          <PrivateRoute path="/chips" component={Chips} />
          <PrivateRoute path="/detergent" component={Detergent} />
          <PrivateRoute path="/frozenFoods" component={FrozenFoods} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
