import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  return (
    <h1 className="WeatherTemperature">
      <span className="MainTemperature">{props.celsius}</span>
      <span className="MainTemperatureUnit">°C</span>
    </h1>
  );
}
