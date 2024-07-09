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
    console.log(sign);
    navigate("/");
    return sign;
  };
  return (
    <>
      <div className="header">
        <h1>Todo</h1>
        <ul>
          {isLoggedIn ? (
            <>
              <li>
                {" "}
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/tasks">Tasks</Link>
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
              {/* <li>
                <Link to="/tasks">Tasks</Link>
              </li> */}
              <li>
                {" "}
                <Link to="/register">Register</Link>
              </li>
              {/* <li onClick={signOut}>
                {" "}
                <Link to="/logout">Logout</Link>
              </li> */}
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
