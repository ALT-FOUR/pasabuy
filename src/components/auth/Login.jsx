import React, { useState } from "react";
import { FIREBASE_API } from "../../api/FIREBASE_API";

import "../../assets/css/login.css";
import "../../assets/css/index.css";
import undraw from "../../assets/img/undraw.svg";

const Login = ({ setIsAuth }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await FIREBASE_API.post("/auth/login", {
        email,
        password,
      });

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };

  return (
    <div className="child-3">
      <div className="form-container">
        <div className="login-col">Log In</div>
        <div className="errors-container">
          {errors.map((e) => {
            return e.msg;
          })}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
