import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  const apiKey = "159ab5e75e6ed3b8cb370b2d499a9313";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Fri</div>
          <div className="ForecastIcon">Icon</div>
          <div>
            <span className="ForecastMaxTemperature">10°</span>
            <span className="ForecastMinTemperature"> 2°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
