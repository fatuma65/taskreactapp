import { useState } from "react";
import Calender  from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
// import './TaskDashboardStyles.css'
import './CalenderStyles.css'


const CalenderApplication = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calender">
      <Calender value={date} onChange={setDate}/>
    </div>
  );
};
export default CalenderApplication;
