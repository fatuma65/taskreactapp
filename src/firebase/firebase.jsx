// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6tuS1xILsODT7tgJ-gfM67UwxFNaEYlA",
  authDomain: "todo-app-8770e.firebaseapp.com",
  databaseURL: "https://todo-app-8770e-default-rtdb.firebaseio.com",
  projectId: "todo-app-8770e",
  storageBucket: "todo-app-8770e.appspot.com",
  messagingSenderId: "350324571678",
  appId: "1:350324571678:web:d565008e31f3cf1b2cf80f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app.name)
const auth = getAuth(app)
console.log(auth)

export {app, auth}

// import firebase from "firebase/app";
// import "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDUN0jTZMtUZrzHu6NhtETFlj-0MP8_i9A",
//   authDomain: "todo-application-dd4ae.firebaseapp.com",
//   projectId: "todo-application-dd4ae",
//   storageBucket: "todo-application-dd4ae.appspot.com",
//   messagingSenderId: "52900899456",
//   appId: "1:52900899456:web:ce1c4e360d13a0889fd465",
//   measurementId: "G-3K1KJJJKPB",
// };

// firebase.initializeApp(firebaseConfig);

// export default firebase;
