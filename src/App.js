import React from "react";
import Weather from "./Weather";
import "./Weather.css";
import "./App.css";


export default function App () {
  return (
    <div className="App">
      <div className="container">

      
      <Weather defaultCity="Berlin"/>
      <footer>
  <a href="https://github.com/shialax/weather-react"
  target="_blank" rel="noopener noreferrer">Open-source code,</a> by <a href="#">Shiala Campos</a> from <a href="https://www.shecodes.io/" target="_blank" 
  rel="noopener noreferrer">SheCodes</a> and hosted on <a href="https://main--peppy-donut-ea7cdd.netlify.app/" target="_blank" rel="noopener noreferrer"> Netlify</a>
  </footer>
    </div>
</div>
  );
 
}

