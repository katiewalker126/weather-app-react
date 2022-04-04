import React from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col">
          <div className="clearfix">
            <h1>
              <span className="MainTemperature">{props.data.temperature}</span>
              <span className="MainTemperatureUnit">°C</span>
            </h1>
            <div className="MainSymbol">
              <img
                src={props.data.iconUrl}
                alt="current weather symbol"
                width="120"
              />
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
                  {props.data.description}
                </strong>
              </li>
              <li>
                Wind:
                <strong>
                  <span className="Wind"> {props.data.wind}</span> m/s
                </strong>
              </li>
              <li>
                Maximum:
                <strong>
                  <span className="MaximumTemp"> {props.data.maximumTemp}</span>
                  °
                </strong>
              </li>
              <li>
                Minimum:
                <strong>
                  <span className="MinimumTemp"> {props.data.minimumTemp}</span>
                  °
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h2 className="City">{props.data.city}</h2>
      <FormattedDate date={props.data.date} />
    </div>
  );
}
