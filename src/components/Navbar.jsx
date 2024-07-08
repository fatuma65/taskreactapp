import "./Navbarstyles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <h1>Todo</h1>
        <ul>
          <li> <Link to='/'>Home</Link></li>
          <li>Tasks</li>
          <li> <Link to='/login'>Login</Link></li>
          <li>Logout</li>
        </ul>
        {/* <ul>
          <li> <Link to='./home'>Home</Link></li>
          <li><Link to='./tasks'>Tasks</Link></li>
          <li> <Link to='./login'>Login</Link></li>
          <li> <Link to='./logout'>Logout</Link></li>
        </ul> */}
      </div>
    </>
  );
};

export default Navbar;
