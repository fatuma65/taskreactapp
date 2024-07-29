import "./Navbarstyles.css";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import useAuth from "../contexts/context";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const signOut = () => {
    const sign = auth.signOut();
    // console.log(sign);
    navigate("/");
    return sign;
  };
  return (
    <>
      <div className="header">
        <h1>DoItNow</h1>
        <ul>
          {isLoggedIn ? (
            <>
              <li>
                {" "}
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/overview">Dashboard</Link>
              </li>
              <li onClick={signOut}>
                {" "}
                <Link to="/logout">Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                {" "}
                <Link to="/">Home</Link>
              </li>
              <li>Contact</li>
              {/* <li>
                <Link to="/tasks">Tasks</Link>
              </li> */}
              <li className="button">
                {" "}
                <Link to="/login">Sign In</Link>
              </li>
              <li className="button">
                {" "}
                <Link to="/register">Register</Link>
              </li>
              {/* <button><Link to={'/login'}>Sign In</Link></button>
              <button><Link to={'/register'}>Register</Link></button> */}
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
