import React, { useState } from "react";
import WeatherCurrent from "./WeatherCurrent";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].main,
      wind: Math.round(response.data.wind.speed),
      maximumTemp: Math.round(response.data.main.temp_max),
      minimumTemp: Math.round(response.data.main.temp_min),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "159ab5e75e6ed3b8cb370b2d499a9313";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a town or city"
            autoComplete="off"
            autoFocus="on"
            onChange={updateCity}
            className="search-text-input"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
        <WeatherCurrent data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
