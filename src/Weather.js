import React, { useState } from "react";
import axios from 'axios';
import FormattedDate from "./FormattedDate";
import "./Weather.css";


export default function Weather() {
    const [ready, setReady] = useState(false);
    const[weatherData, setWeatherData] = useState({});

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            humidity: response.data.main.humidity,
            imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
            description: response.data.weather[0].description
        })
    
       
    }

    if (weatherData.ready) {
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
          <h1>{weatherData.city}</h1>
          <ul>
          <li>{weatherData.description} </li>
            <li>
              <FormattedDate date={weatherData.date}/> <span id="date"> </span>
            </li>
            
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <img 
              src={weatherData.imgUrl} 
              alt= {weatherData.description}
              />
              <div>
                <strong>{Math.round(weatherData.temperature)} </strong>
                <span>
                  <a href="/">°C</a> |<a href="/"> °F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}</li>
              <li>Wind: {weatherData.wind} km/h</li>
              
            </ul>
          </div>
        </div>
   
      </div>
      
        );
    } else {


    const apiKey= "308f0849c624ffab4a06f38f76ca19a0";
    let city="Berlin";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);

    return "Loading.."
   
    }
    
   
    }


  