import React, { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { createUser } from "../firebase/authFunctions";

const RegisterComponent = () => {
  const { userLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      await createUser(email, password);
    }
  };

  return (
    <section>
      {userLoggedIn && <Navigate to={"/home"} replace={true} />}
      <div>
        <h3>Welcome CreateUser</h3>
        <form onSubmit={onSubmit}>
          <div>
            <label>Email</label>
            <input
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              disabled={isRegistering}
              type="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div>
            <label>Confirm password</label>
            <input
              disabled={isRegistering}
              type="password"
              autoComplete="off"
              required
              value={confirmPassword}
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
            />
          </div>
          {errorMessage && <span>{errorMessage}</span>}
          <button type="submit" disabled={isRegistering}>
            {isRegistering ? "Registering.." : "Sign up"}
          </button>
        </form>
        <div>
          <p>Already have an account?</p>
          <Link to={"/login"}>Continue to Login</Link>
        </div>
      </div>
    </section>
  );
};

export default RegisterComponent;
