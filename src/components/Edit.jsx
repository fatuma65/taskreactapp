import useAuth from "../contexts/context";
import Navbar from "../components/Navbar";
import "./AddTaskStyles.css";
import { useNavigate } from "react-router-dom";
const EditTasks = () => {
  const { task, selectedTaskId, editTask } = useAuth();
  const navigate = useNavigate();
  const handleChange = (id, updatedTask) => {
    try {
      editTask(id, updatedTask);
    }
    catch(error) {
      console.log('an error has occured', error)
    
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("task has been edit sucessfully");
    navigate("/tasks");
  };
  return (
    <>
      <Navbar />
      <div className="add-task">
        <h1>Edit Task: {task.title}</h1>
        {task.map((tas) => (
        <form action="" className="task-form" onSubmit={handleSubmit} key={tas.id}>
          
            <div >
              {selectedTaskId === tas.id ? (
                <>
                  <fieldset>
                    <label htmlFor="title">Title</label>

                    <input
                      type="text"
                      name="title"
                      id="title"
                      defaultValue={tas.title}
                      onChange={(e) =>
                        handleChange(tas.id, { title: e.target.value })
                      }
                    />
                  </fieldset>
                  <fieldset>
                    <label htmlFor="description">description</label>
                    <textarea
                      id="description"
                      name="description"
                      rows={8}
                      defaultValue={tas.description}
                      onChange={(e) =>
                        handleChange(tas.id, { description: e.target.value })
                      }></textarea>
                  </fieldset>
                  <button>Edit Task</button>
                </>
              ) : <p>No task selected, try again</p>} 
            </div>
          
        </form>
        ))}
      </div>
    </>
  );
};
export default EditTasks;
