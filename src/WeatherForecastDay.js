import React from "react";

export default function WeatherForecastDay(props) {
  function icon() {
    let iconUrl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    return `${iconUrl}`;
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="ForecastDay">{day()}</div>
      <div className="ForecastIcon">
        <img src={icon()}></img>
      </div>
      <div>
        <span className="ForecastMaxTemperature">{maxTemperature()}</span>
        <span className="ForecastMinTemperature"> {minTemperature()}</span>
      </div>
    </div>
  );
}
