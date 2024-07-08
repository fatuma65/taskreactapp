import Navbar from "./Navbar";
import "./HomePageStyles.css";
import banner from "../assests/original-task_shot-removebg-preview.png";
const HomePage = () => {
  return (
    <>
      <div className="home-section">
        <Navbar />
        <div className="section1">
          <div className="para1 ">
            <h1>Todo Application</h1>
            {/* <h2>Where creativity meets productivity</h2> */}
            <p>
              The application helps you keep track of your tasks. You can add
              tasks with descriptions and due dates, organize them by project or
              category, and mark them as done when you finish. It's easy to edit
              tasks and move them around. Notifications remind you of upcoming
              deadlines, so you stay on top of things. The app helps you stay
              organized and get things done efficiently in your daily life and
              work.
            </p>
          </div>

          <img src={banner} alt="" className="image" />
        </div>
      </div>
    </>
  );
};
export default HomePage;
