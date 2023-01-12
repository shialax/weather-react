import React, { useState } from "react";
import axios from 'axios';
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";


export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
    const[weatherData, setWeatherData] = useState({});
    

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
            description: response.data.weather[0].description
        })

        
       
    }

    function search() {
        const apiKey= "308f0849c624ffab4a06f38f76ca19a0";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);

    }
    
    function handleSubmit(event) {
            event.preventDefault();
            search(city);
        }

        function handleCityChange(event) {
            setCity(event.target.value);

        }
    

    if (weatherData.ready) {
        return (
            <div className="Weather">
        <form onSubmit={handleSubmit} className="mb-3">
         
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="type a city.."
                className="form-control"
                onChange={handleCityChange}
                
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-light" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData}/>
        <WeatherForecast coordinates={weatherData.coordinates}/>
          </div>
        );
    } else {

        search();
        return "Loading.."
   
    }
    
   
    }