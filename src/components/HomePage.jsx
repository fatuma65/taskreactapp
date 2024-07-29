import Navbar from "./Navbar";
import "./HomePageStyles.css";
import banner from "../assests/original-task_shot-removebg-preview.png";
import mine from "../assests/Untitled.png";
import { Link } from "react-router-dom";
import RealTime from "./RealTime";
import Weather from "./Weather";
// import mine from '../assests/To-do_image-removebg-preview.png'
const HomePage = () => {
  return (
    <>
      <div className="home-section">
        <Navbar />
        <div className="section1">
          <div className="para1 ">
            <h1>
              Start your day <br /> feeling calm & <br /> in control
            </h1>
            {/* <h2>Where creativity meets productivity</h2> */}
            <p>
              This productive tool is designed to help you better manage your
              task <br />
              project-wise conveniently
            </p>
            <button>
              <Link to={"/register"}>Get Started</Link>
            </button>
          </div>

          <img src={banner} alt="" className="image" />
        </div>
      </div>
      <div className="over">
        <h1>Overview</h1>
        <p>
          {" "}
          The application helps you keep track of your tasks. You can add tasks
          with descriptions and due dates, organize them by project or category,
          and mark them as done when you finish. It's easy to edit tasks and
          move them around. Notifications remind you of upcoming deadlines, so
          you stay on top of things. The app helps you stay organized and get
          things done efficiently in your daily life and work.
        </p>
      </div>
      <img src={mine} alt="to-do list banner" className="image" />
    </>
  );
};
export default HomePage;
