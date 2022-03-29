import React from "react";
import "./Weather.css";
import cloudy from "./images/cloudy.png";

export default function Weather() {
  return (
    <h1>
      <div className="Weather">
        <div className="row">
          <div className="col">
            <div className="clearfix">
              <h1>
                <span className="MainTemperature">9</span>
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
                    <span className="WeatherDescription"></span> Clouds
                  </strong>
                </li>
                <li>
                  Wind:
                  <strong>
                    <span className="Wind"> 9</span> m/s
                  </strong>
                </li>
                <li>
                  Maximum:
                  <strong>
                    <span className="MaximumTemp"> 10</span>°
                  </strong>
                </li>
                <li>
                  Minimum:
                  <strong>
                    <span className="MinimumTemp"> 8</span>°
                  </strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h2 className="City">London</h2>
        <h3 className="Date">Sunday 6 February, 17:15 GMT</h3>
      </div>
    </h1>
  );
}
