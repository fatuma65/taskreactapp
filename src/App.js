import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home.";
import Login from "./components/Login";
import TaskDashboard from "./components/TaskDashboard";
import Logout from "./components/Logout";
import ForgotPassword from "./components/ForgotPassword";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/tasks" element={<TaskDashboard />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </>
  );
}

export default App;
