import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home.";
import Login from "./components/Login";
import TaskDashboard from "./components/TaskDashboard";
import Logout from "./components/Logout";
import ForgotPassword from "./components/ForgotPassword";
import Register from "./components/Register";
import AddTasks from "./components/AddTasks";
import EditTasks from "./components/Edit";
import Tasks from "./components/Tasks";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/tasks" element={<TaskDashboard />}></Route> */}
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/add-tasks" element={<AddTasks/>}></Route>
        <Route path="/overview" element={<TaskDashboard/>}></Route>
        <Route path="/tasks" element={<Tasks/>}></Route>
        <Route path="/edit-tasks" element={<EditTasks/>}></Route>
        <Route path="/delete-tasks" element={<EditTasks/>}></Route>
      </Routes>
    </>
  );
}

export default App;
