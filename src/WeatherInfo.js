import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
  <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
    <ul>
    <li>{props.data.description} </li>
      <li>
        <FormattedDate date={props.data.date}/> <span id="date"> </span>
      </li>
      
    </ul>
 
  <div className="row">
    <div className="col-6">
      <div className=" clear-fix d-flex weather-temperature">
        <WeatherIcon code={props.data.icon} size={60}/>
        
        
        <div>
          <WeatherTemperature celsius={props.data.temperature}/>
          
        </div>
      </div>
    </div>
    <div className="col-6">
      <ul>
        <li>Humidity: {props.data.humidity}</li>
        <li>Wind: {props.data.wind} km/h</li>
        
      </ul>
    </div>
  </div>

</div>

  );
}





