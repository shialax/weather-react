import React from "react";
import Weather from "./Weather";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello from React
       <Weather city="Tokyo"/>
      </header>
    </div>
  );
}

export default App;
