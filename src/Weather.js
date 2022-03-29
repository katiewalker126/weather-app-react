import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import cloudy from "./images/cloudy.png";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].main,
      wind: Math.round(response.data.wind.speed),
      maximumTemp: Math.round(response.data.main.temp_max),
      minimumTemp: Math.round(response.data.main.temp_min),
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col">
            <div className="clearfix">
              <h1>
                <span className="MainTemperature">
                  {weatherData.temperature}
                </span>
                <span className="MainTemperatureUnit">°C</span>
              </h1>
              <div className="MainSymbol">
                <img src={cloudy} alt="current weather symbol" width="120" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="Observations">
              <ul>
                <li>
                  Forecast:
                  <strong>
                    <span className="WeatherDescription"></span>{" "}
                    {weatherData.description}
                  </strong>
                </li>
                <li>
                  Wind:
                  <strong>
                    <span className="Wind"> {weatherData.wind}</span> m/s
                  </strong>
                </li>
                <li>
                  Maximum:
                  <strong>
                    <span className="MaximumTemp">
                      {" "}
                      {weatherData.maximumTemp}
                    </span>
                    °
                  </strong>
                </li>
                <li>
                  Minimum:
                  <strong>
                    <span className="MinimumTemp">
                      {" "}
                      {weatherData.minimumTemp}
                    </span>
                    °
                  </strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h2 className="City">{weatherData.city}</h2>
        <h3 className="Date">Sunday 6 February, 17:15 GMT</h3>
      </div>
    );
  } else {
    const apiKey = "159ab5e75e6ed3b8cb370b2d499a9313";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
