import React from "react";
import FormattedDate from "./FormattedDate";

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
      <div className="d-flex weather-temperature">
        <img 
        src={props.data.imgUrl} 
        alt= {props.data.description}
        />
        <div>
          <strong>{Math.round(props.data.temperature)} </strong>
          <span>
            <a href="/">°C</a> |<a href="/"> °F</a>
          </span>
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





