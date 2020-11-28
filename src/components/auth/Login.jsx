import React, { useState } from "react";
import { FIREBASE_API } from "../../api/FIREBASE_API";

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
    <div>
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
  );
};

export default Login;
