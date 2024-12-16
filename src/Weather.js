import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(""); // Initialize as empty string
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to fetch weather data
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
    setLoading(false); // Stop loading once data is fetched
  }

  // Function to search weather data by city
  function search() {
    setLoading(true);
    setError(""); // Clear previous errors
    const apiKey = "308f0849c624ffab4a06f38f76ca19a0";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(() => {
        setLoading(false);
        setError("City not found, please try again.");
      });
  }

  // Debounced search function
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      search();
    }, 1000); // Delay of 1 second after user stops typing

    return () => clearTimeout(delayDebounceFn); // Clean up the timeout on every render
  }, [city]); // Trigger when the city changes

  // Use Effect to load the saved city from localStorage
  useEffect(() => {
    const savedCity = localStorage.getItem("city");
    if (savedCity) {
      setCity(savedCity);
    }
  }, []); // Empty dependency array means this runs once on mount

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem("city", city); // Save the city to localStorage
    search();
  }

  // Handle city input change
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              onChange={handleCityChange}
              value={city}
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-light" />
          </div>
        </div>
      </form>

      {loading && <div>Loading...</div>}
      {error && <div className="error-message">{error}</div>}

      {weatherData.ready && (
        <>
          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </>
      )}
    </div>
  );
}
