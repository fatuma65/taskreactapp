import Navbar from "./Navbar";
import { useState } from "react";
import "./LoginStyles.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
// import "boxicons";
import welcome from "../assests/welcome1.jpg";
import useAuth from "../contexts/context";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { signInWithEmail } from "../firebase/auth";
const Register = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // function to handle user input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCrediatials = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
      const user = userCrediatials.user
      console.log(user)
      localStorage.setItem('name',formData.username)
      alert('You have created an account successfully')
    } catch (error) {
      console.log(error.message);
    }
    navigate("/login");
  };
  return (
    <>
      <div className="login-section">
        <Navbar />
        <div className="login">
          <img src={welcome} alt="" />
          <div className="back">
            <h1>Welcome</h1>
            <h2>Please register to continue</h2>
            <form action="" id="form" onSubmit={handleSubmit}>
              <fieldset>
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  required
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="email">Last Name</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  required
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="email">email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  value={formData.username}
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset className="password">
                <label htmlFor="password">Password</label>
                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <i
                    className={showPassword ? "bx bx-low-vision" : "bx bx-show"}
                    onClick={handlePasswordVisibility}></i>
                </div>
              </fieldset>
              <button type="submit"> Submit</button>
            </form>
            <h3>
              You have an Account, <Link to="/login">login here</Link>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
