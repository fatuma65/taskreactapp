import Navbar from "./Navbar";
import "./AddTaskStyles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../contexts/context";
const AddTasks = () => {
  const [tasks, setTasks] = useState({
    title: "",
    description: "",
  });
  const navigate = useNavigate()
  const {addTask, task} = useAuth()
  const handleChange = (e) => {
    setTasks({ ...tasks, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(tasks)
    console.log(task)
    localStorage.setItem('title', tasks.title)
    localStorage.setItem('description', tasks.description)
    alert("Task is added sucessfully");
    setTasks({title:'', description:''})
    navigate('/tasks')
  };
  return (
    <>
      <Navbar />
      <div className="add-task">
        <h1>Add Tasks</h1>
        <form action="" className="task-form" onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={tasks.title}
              onChange={handleChange}
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              rows={8}
              value={tasks.description}
              onChange={handleChange}
              required></textarea>
          </fieldset>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};
export default AddTasks;
