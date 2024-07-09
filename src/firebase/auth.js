import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  updatePassword,
} from "firebase/auth";
import { auth } from "./firebase";

export const creatingTheUserWithEmail = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

// export const signInWithEmail = async (email, password) => {
//     try {
//             try {
//               const userCredential = await signInWithEmailAndPassword(auth, email, password);
//               const user = userCredential.user;
//               console.log("User logged in:", user);
//               return user;
//             } catch (error) {
//               console.error("Sign in error:", error.code, error.message);
//               throw error; // Propagate the error for handling in your components
//             }
//           };
//     // try {
//     //    const userCreditial =  await signInWithEmailAndPassword(auth, email, password);
//     //    const user = userCreditial.user
//     //    console.log(user)
//     //    return user
//     // }
//     // catch (error) {
//     //     console.error('error signing in user', error.message, error.code)
//     // }
// };

// export const signInWithEmail = async (email, password) => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       console.log("User logged in:", user);
//       return user;
//     } catch (error) {
//       console.error("Sign in error:", error.code, error.message);
//       throw error; // Propagate the error for handling in your components
//     }
//   };

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result;
};

export const signOut = () => {
  return auth.signOut();
};

export const passwordReset = (email) => {
  return sendEmailVerification(auth, email);
};

export const passwordChange = (password) => {
  return updatePassword(auth.currentUser, password);
};

export const emailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};
