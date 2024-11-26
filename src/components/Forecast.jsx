// src/components/Forecast.jsx
import React from "react";

const Forecast = ({ forecastData }) => {
  return (
    <div className="forecast-container">
      {forecastData.map((forecast, index) => {
        const date = new Date(forecast.dt_txt).toLocaleDateString();
        const temp = `${forecast.main.temp}°C`;
        const weather = forecast.weather[0].description;
        const icon = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;

        return (
          <div className="forecast-item" key={index}>
            <p>{date}</p>
            <img src={icon} alt={weather} />
            <p>{temp}</p>
            <p>{weather}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
