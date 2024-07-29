import { initializeApp } from "firebase/app";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

import { createContext, useContext, useEffect, useState } from "react";
import {v4 as uuidv4} from 'uuid'
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [task, setTask] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

 function initializeUser(user) {
    if (user) {
      setCurrentUser(user );
      setIsLoggedIn(true);
    } else {
      setCurrentUser(null);
      setIsLoggedIn(false);
    }
  }
  // async function initializeUser(user) {
  //   if (user) {
  //     setCurrentUser({ ...user });
  //     setIsLoggedIn(true);
  //   } else {
  //     setCurrentUser(null);
  //     setIsLoggedIn(false);
  //   }
  // }
  console.log(task)
  const handleUsername = (user) => {
    setCurrentUser(user);
    console.log(user);
    console.log(currentUser)
    setIsLoggedIn(true);
  };
  console.log(task)
  const addTask = (newTask) => {
    console.log(newTask);
    const id = uuidv4() // generates a new nique id
    const taskWithId = {...newTask, id}
    setTask([...task, taskWithId]);
    console.log(task);
  };
  const editTask = (id, editedtask) => {
    console.log(id);
    const updatedTasks = task.map((tas) =>
      tas.id === id ? {...tas, ...editedtask}  : tas
    );
    console.log(updatedTasks);
    setTask(updatedTasks);
    console.log(task)
  };

  const handleDelete = (id) => {
    const deletedTask = task.filter((tas) => tas.id !== id)
    setTask(deletedTask)
    console.log('it has been deleted')
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        loading,
        currentUser,
        addTask,
        task,
        setTask,
        editTask,
        handleUsername,
        selectedTaskId,
        setSelectedTaskId,
        handleDelete,
        initializeUser,
        setUserDetails
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
