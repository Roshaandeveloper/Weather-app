import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import WeatherInfo from "./components/WeatherInfo";
import Forecast from "./components/Forecast";
import FetchWeather from "./components/FetchWeather";
import FetchForecast from "./components/FetchForecast";
import "./App.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = (city) => {
    FetchWeather(city, setWeatherData, setError);
    FetchForecast(city, setForecastData, setError);
  };

  return (
    <div className="container">
      <h1>Weather Today</h1>
      <SearchBox onSearch={handleSearch} />
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherInfo weatherData={weatherData} />}
      {forecastData && <Forecast forecastData={forecastData} />}
    </div>
  );
};

export default App;
