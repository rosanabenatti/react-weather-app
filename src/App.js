import React, { userState } from "react";
import axios from "axios";

function App() {
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=amsterdam&appid=f560c295de51dc458df8b1c23e4beea3`;

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Amsterdam</p>
          </div>
          <div className="temp">
            <h1>15°C</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>12°C</p>
          </div>
          <div className="humidity">
            <p>92%</p>
          </div>
          <div className="wind">21 km/h</div>
        </div>
      </div>
    </div>
  );
}

export default App;
