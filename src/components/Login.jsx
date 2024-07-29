import Navbar from "./Navbar";
import { useState } from "react";
import "./LoginStyles.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
// import "boxicons";
import welcome from "../assests/welcome1.jpg";
import useAuth from "../contexts/context";
import {  signInWithEmailAndPassword,
} from 'firebase/auth'
// import { signInWithEmail } from "../firebase/auth";
const Login = () => {
  const { isLoggedIn, currentUser,handleUsername, initializeUser } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    // username: "",
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
      if (!isLoggedIn) {
        const userCreditial = await signInWithEmailAndPassword(auth, formData.email, formData.password);
        console.log(userCreditial)
        // const user = userCreditial.user()
        // console.log(user)
        console.log("User signed in successfully");
        console.log(currentUser)
        localStorage.setItem("email", formData.email);
        localStorage.setItem("password", formData.password);
        initializeUser(formData.email)
        alert(
          `Welcome ${formData.email}, you have been logged in successfully`
        );
        setFormData({
          email: "",
          password: "",
        });
        navigate("/overview"); // Navigate to tasks page or any other route
      }
      else {
        console.log('aYou are already logged in, please sign out')
      }
      
    } catch (error) {
      console.log("an error occured", error);
    }
  };
  return (
    <>
      <div className="login-section">
        <Navbar />
        <div className="login">
          <img src={welcome} alt="" />
          <div className="back">
            <h1>Welcome Back</h1>
            <h2>Please Login to continue</h2>
            <form action="" id="form" onSubmit={handleSubmit}>
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
            <Link to="/forgot-password">Forgot Password?</Link>
            <h3>
              Dont have an account, <Link to="/register">signup</Link>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
