import React from "react";
import cloudy from "./images/cloudy.png";
import "./Image.css";

export default function Image() {
  return (
    <div className="Main-image">
      <img src={cloudy} alt="current weather symbol" width="120" />
    </div>
  );
}
