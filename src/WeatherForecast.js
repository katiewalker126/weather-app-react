import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
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
