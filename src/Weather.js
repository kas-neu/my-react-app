import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState(null);
  let [message, setMessage] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      function showMessage(response) {
        setMessage(
          <div className="list">
            <ul>
              <li>
                Temperature: {Math.round(response.data.temperature.current)} °C
              </li>
              <li>
                Description:{" "}
                <span className="description">
                  {response.data.condition.description}
                </span>
              </li>
              <li>Humidity: {response.data.temperature.humidity}%</li>
              <li>Windspeed: {Math.round(response.data.wind.speed)} m/s</li>
              <li className="icon">
                <img
                  src={response.data.condition.icon_url}
                  alt={response.data.condition.icon}
                  height={60}
                />
              </li>
            </ul>
          </div>
        );
      }
      let apiKey = `9fb66eat3c45068of64821d7cabe200f`;
      let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
      axios.get(apiUrl).then(showMessage);
    } else {
      setMessage(<p>Please enter a city.</p>);
    }
  }
  function getCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  return (
    <div className="Weather">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          required
          className="search-form-input"
          onChange={getCity}
        />
        <input type="submit" value="Search" className="search-form-button" />
      </form>
      <h2>{message}</h2>
    </div>
  );
}
