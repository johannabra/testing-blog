import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signOutUser } from "../firebase/authFunctions";
const Nav = () => {
  const { currentUser, userLoggedIn } = useContext(AuthContext);
  return (
    <nav className="flex justify-between items-center">
      {userLoggedIn ? (
        <>
          <p className="mx-5 font-bold">Welcome {currentUser.email}</p>

          <Link to="/home" className="mr-4">
            Home
          </Link>
          <Link to="/profile" className="mr-4">
            Profile
          </Link>
          <button onClick={signOutUser}>Log out</button>
        </>
      ) : (
        <Link to="/login" className="mr-4">
          log in
        </Link>
      )}
    </nav>
  );
};

export default Nav;
