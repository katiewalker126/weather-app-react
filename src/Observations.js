import React from "react";
import "./Observations.css";

export default function Observations() {
  return (
    <div className="Observations">
      <ul>
        <li>
          Forecast:
          <strong>
            <span className="weather-description"></span> Clouds
          </strong>
        </li>
        <li>
          Wind:
          <strong>
            <span className="wind"> 9</span> m/s
          </strong>
        </li>
        <li>
          Maximum:
          <strong>
            <span className="maximum-temp"> 10</span>°
          </strong>
        </li>
        <li>
          Minimum:
          <strong>
            <span className="minimum-temp"> 8</span>°
          </strong>
        </li>
      </ul>
    </div>
  );
}
