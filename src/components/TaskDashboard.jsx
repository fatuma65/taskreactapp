import "./TaskDashboardStyles.css";
import { Link } from "react-router-dom";
import useAuth from "../contexts/context";
import { useState } from "react";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import RealTime from "./RealTime";
import Weather from "./Weather";
import CalenderApplication from "./Calender";
const TaskDashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState("task");
  // const [tasks, setTasks] = useState([]);
  const { task, setSelectedTaskId } = useAuth();
  // const { username } = currentUser;
  const navigate = useNavigate();
  const handleCalender = () => {
    setSelectedComponent("calender");
  };

  const handleReminder = () => {
    setSelectedComponent("reminder");
  };

  const handleTask = () => {
    setSelectedComponent("task");
  };
  const handleSelectedTaskid = (id) => {
    console.log("this is the task id", id);
    setSelectedTaskId(id);
  };
  const signOut = () => {
    const sign = auth.signOut();
    // console.log(sign);
    navigate("/");
    return sign;
  };

  return (
    <>
      {/* <Navbar />
      <div className="dashboard">
        <div className="tasks">
          <h1>Dashboard</h1>
          <div className="inputs">
            <input type="text" />
            <i className="bx bx-search"></i>
          </div>
          <div className="div-2">
            <img src={image} alt="name" className="fatuma" />
            <select name="" id="select">
              <option value="">Profile</option>
              <option value="">Logout</option>
            </select>

            <i className="bx bxs-bell"></i>
          </div>
        </div>

        <div className="main-div">
          <div className="lists">
            <ul>
              <li onClick={handleTask}>Tasks</li>
              <li>Inbox</li>
              <li onClick={handleCalender}> Calender</li>
              <li onClick={handleReminder}>Reminder</li>
              <li>My lists</li>
              <li onClick={signOut}>
                {" "}
                <Link to="/logout">Logout</Link>
              </li>
              <li></li>
            </ul>
          </div>
          <div className="add-tasks">
            <div className="inside-1">
              <h1>Good morning</h1>
              <h1>Good morning</h1>
              {selectedComponent === "task" && (
                <button>
                  <i className="bx bxs-plus-circle"></i>
                  <Link to={"/add-tasks"}>Add new tasks</Link>
                </button>
              )}
            </div>
            <div>
              {selectedComponent === "calender" && <CalenderApplication />}
              {selectedComponent === "task" && <Tasks />}
              {selectedComponent === "reminder" && <Tasks />}
            </div>
          </div>
          <div className="details">
            <h2>Task Details</h2>
            {task.map((tas) => (
              <div key={tas.id}>
                <div
                  onClick={handleSelectedTaskid(tas.id)}
                  style={{ cursor: "pointer" }}>
                  <h3>{tas.title}</h3>
                  <p>{tas.description}</p>
                </div>
                <h3>{tas.title}</h3>
                <p>{tas.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <div className="dashboard">
        <div className="dashboard-section">
          <div className="list1">
            <i className="bx bxs-box"></i>
            <h1>DoItNow</h1>
          </div>
          <button className="btn">Overview</button>

          <ul>
            <li>
              <i className="bx bx-list-ul"></i><Link to={'/tasks'}>Tasks</Link>
            </li>
            <li>
              <i className="bx bx-list-check"></i>Started
            </li>
            <li>
              <i className="bx bx-star"></i>Active
            </li>
            <li>
              <i className="bx bxs-check-circle"></i>Complete
            </li>
            <li>
              <i className="bx bx-history"></i>History
            </li>
          </ul>
          <button className="btn2">See more</button>
          <ul>
            <li>
              <i className="bx bxs-folder-plus"></i><Link to={'/add-tasks'}>New</Link>
            </li>
            <li>
              <i className="bx bx-edit"></i>Edit
            </li>
            <li>
              <i className="bx bx-trash"></i>Delete
            </li>
          </ul>
          <ul className="set">
            <li>
              <i className="bx bx-cog"></i>Settings
            </li>
          </ul>
        </div>
        <div>
          <div className="section2">
            <div className="searches">
              <i className="bx bx-search"></i>
              <input type="text" placeholder="search" />
            </div>
            <button className="btn3">Search</button>
          </div>
          <div className="main-sec">
            <div className="section3">
              <h1>Good Evening Cathy,</h1>
              <p>Today has been such a beautiful day</p>
              <RealTime />
            </div>
            <div className="section4">
              <Weather />
            </div>
          </div>
          <div className="section5">
            <div className="calender">
            <CalenderApplication />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TaskDashboard;
