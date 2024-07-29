import { useState, useEffect } from "react";
const RealTime = () => {
  const [date, setDate] = useState(new Date());

  const handleDate = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const interval = setInterval(handleDate, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <h1>{date.toLocaleTimeString()}</h1>
      </div>
    </>
  );
};

export default RealTime;
