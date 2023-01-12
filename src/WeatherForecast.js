import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        setLoaded(false);
      }, [props.coordinates]);

    function handleResponse(response) {
        setForecastData(response.data.daily);
        setLoaded(true);
    }

   

    if (loaded) {
        console.log(forecastData)
     return (
        <div className="WeatherForecast">
            <div className="row">
                {forecastData.map(function(dailyForecast, index) {
                    if (index < 5) {
                    return(
                        <div className="col" key={index}>
                    <WeatherForecastDay data={dailyForecast}/>
                </div>
                    );
                    } else {
                        return null;
                    }
                })}
                
            </div>

        </div>
    );

    return null;
    } else { 
         let apiKey = "308f0849c624ffab4a06f38f76ca19a0";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
        
    }
}
