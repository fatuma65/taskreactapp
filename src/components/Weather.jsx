import { useState, useEffect } from "react";
import "./TaskDashboardStyles.css";
const Weather = () => {
  const [city, setCity] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      // getting a current location of a client
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCity({
            lat: position.coords.latitude,
            long: position.coords.longitude,
          });
        },
        (error) => {
          console.log("Error fetching data", error);
        }
      );
    } else {
      console.log("Geo location is not supportedin this browser");
    }
  }, []);

  useEffect(() => {
    if (city) {
      fetchWeatherData(city.lat, city.long);
    }
  }, [city]);

  const fetchWeatherData = async () => {
    const apiKey = "6207b946c89584b8b62f79db5cc91b80";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.long}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setData(data);
      } else {
        console.log("error fetching the data");
      }
    } catch (error) {
      console.log("error fetching the weather data", error);
    }
  };

  if (!data) {
    return <div>Loading....</div>;
  }

  return (
    <div className="wet">
      <div className="weather">
        <i className="bx bx-cloud-light-rain"></i>
        <p>{data.main.temp}<sup>0</sup>C</p>
      </div>

      <h1>{data.weather[0].description}</h1>
      <p className="par">{data.name}</p>
    </div>
  );
};

export default Weather;
