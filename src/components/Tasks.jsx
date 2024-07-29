import useAuth from "../contexts/context";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import './TasksStyles.css'
const Tasks = () => {
  const { task, handleDelete } = useAuth();

  return (
    <>
    <Navbar /> 
      <div className="check">
        {task.map((tas) => (
          <div className="title1" key={tas.id}>
            <input type="checkbox" />
            <div className="title">
              <h3> {tas.title}</h3>
              <h4>{tas.description}</h4>
              <div>
                <button>
                  <Link to={"/edit-tasks"}>Edit</Link>
                </button>
                <button onClick={() => handleDelete(tas.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Tasks;
