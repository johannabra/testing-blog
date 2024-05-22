import { useState, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signInUser } from "../firebase/authFunctions";

const LoginComponent = () => {
  const { userLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    await signInUser(email, password);
    if (!isSigningIn) {
      setIsSigningIn(true);
    }
  };

  return (
    <section>
      {userLoggedIn && <Navigate to={"/home"} replace={true} />}
      <div>
        <h3>Welcome back User! I love you </h3>
      </div>
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
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        {errorMessage && <span>{errorMessage}</span>}
        <button type="submit" disabled={isSigningIn}>
          {isSigningIn ? "Signing in.." : "Log in"}
        </button>
      </form>
      <div>
        <p>Sign up if you donn´t have an account</p>
        <Link to={"/register"}>Sign up</Link>
      </div>
    </section>
  );
};

export default LoginComponent;
