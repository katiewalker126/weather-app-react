import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <h1 className="WeatherTemperature">
        <span className="MainTemperature">{props.celsius}</span>
        <span className="MainTemperatureUnit">
          °C | °
          <a href="/" onClick={showFahrenheit}>
            F
          </a>
        </span>
      </h1>
    );
  } else {
    return (
      <h1 className="WeatherTemperature">
        <span className="MainTemperature">{fahrenheit()}</span>
        <span className="MainTemperatureUnit">
          °
          <a href="/" onClick={showCelsius}>
            C
          </a>{" "}
          | °F
        </span>
      </h1>
    );
  }
}
