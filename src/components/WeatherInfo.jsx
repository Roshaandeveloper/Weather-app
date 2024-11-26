// src/components/WeatherInfo.jsx
import React from "react";

const WeatherInfo = ({ weatherData }) => {
  const { name, main, weather } = weatherData;

  return (
    <div className="weather-info">
      <h2>{name}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Feels Like: {main.feels_like}°C</p>
      <p>Weather: {weather[0].description}</p>
    </div>
  );
};

export default WeatherInfo;
