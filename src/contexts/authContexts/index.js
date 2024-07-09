import { initializeApp } from "firebase/app";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user });
      setIsLoggedIn(true);
    } else {
      setCurrentUser(null);
      setIsLoggedIn(false);
    }
  }

  const value = {
    isLoggedIn,
    loading,
    currentUser,
  };

  // custom hook created

  return (
    <AuthContext.Provider value={{isLoggedIn, loading, currentUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
