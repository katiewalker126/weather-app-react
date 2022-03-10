import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <h1>
      <div className="Temperature">
        <span className="main-temperature">10</span>
        <span className="main-temperature-unit">°C</span>
      </div>
    </h1>
  );
}
