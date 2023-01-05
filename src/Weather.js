import React from "react";


export default function Weather() {
    let weatherData = {
      city: "New York",
      date: "Tuesday 10:00",
      description: "Sunny",
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      humidity: 80,
      wind: 3,
      temperature: 20
    };
    return (
      <div className="Weather">
        <form id="search-form" className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="type a city.."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-light" />
            </div>
          </div>
        </form>
        <div className="location">
          <h1> {weatherData.city} </h1>
          <ul>
            <li>
              Last updated: {weatherData.date} <span id="date"> </span>
            </li>
            <li> {weatherData.description} </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <img src={weatherData.imgUrl} alt="clear" />
              <div>
                <strong> {weatherData.temperature}</strong>
                <span>
                  <a href="/">°C</a> |<a href="/"> °F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
   
      </div>
      
      
    );
   
  }

  