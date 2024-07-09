import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./ForgotStyles.css";
import { auth } from "../firebase/firebase";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import {
  sendPasswordResetEmail,
} from "firebase/auth";

const ForgotPassword = () => {
  const [formData, setEmail] = useState({
    email: "",
  });
  const [otpValue, setOtpValue] = useState(false);
  // const auth = getAuth()
  const navigate = useNavigate()
  const handleEmail = (e) => {
    setEmail({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(typeof formData.email);
  // const handleOTPVerification = async () => {
  //   try{
  //     const verify = await sendPasswordResetEmail(auth, email)
  //     console.log(verify)
  //     alert('please check your email')

  //   }
  //   catch(error) {
  //     console.log(error.message)
  //   }
  //     // return sendPasswordResetEmail(auth, email.email1)

  //     // .then(() => console.log(otpValue), setOtpValue(true))
  //     // .catch((error) => console.log('an error has occured', error))
  //             // return await sendPasswordResetEmail(auth, email)
  //     // .then(() => setOtpValue(true))
  //     // .catch((error) => console.log('an error has occured', error))
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.email);
    try {
      sendPasswordResetEmail(auth, formData.email)
      .then((result) => {console.log(result)})
      .catch((error) => {console.log(error.code, error.message)})
      
    } catch (error) {
      console.log(error.code, error.message);
    }
    console.log(auth);
    navigate('/')
    alert("Email verification has been sent");
  };
  return (
    <>
      <div className="forgot">
        <Navbar />
        <div className="inline">
          <div className="forgot-section">
            <h1>Reset password</h1>
            <h2>
              Remember your password? <Link to="/login">Login Here</Link>
            </h2>
            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              {/* <input type="text" id="email" name="email" /> */}
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleEmail}
              />
              <button type="submit">
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgotPassword;
