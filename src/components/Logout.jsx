import Navbar from "./Navbar";
import { signOut } from "../firebase/auth";
import { auth } from "../firebase/firebase";

const Logout = () => {

  return (
    <>
      <Navbar />
      <h1>You are now logged out</h1>
    </>
  );
};
export default Logout;
