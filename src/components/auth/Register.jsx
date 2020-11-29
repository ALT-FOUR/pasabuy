import React, { useState } from "react";
import { FIREBASE_API } from "../../api/FIREBASE_API";
import "../../assets/css/index.css";

const Register = ({ setIsAuth }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [handle, setHandle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await FIREBASE_API.post("/auth/register", {
        email,
        password,
        confirmPassword,
        handle,
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
    <div className="modal-content">
      <div className="errors-container">
        {errors.map((e) => {
          return e.msg;
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setHandle(e.target.value);
          }}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
