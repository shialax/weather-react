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
  <a href="https://github.com/shialax/weather-react">Open-source code,</a> by <a href="#">Shiala Campos</a> from <a href="https://www.shecodes.io/">SheCodes</a>
  </footer>
    </div>
</div>
  );
 
}

