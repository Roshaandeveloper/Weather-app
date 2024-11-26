// src/components/FetchWeather.jsx
const API_KEY = "b54bb537858a694861d8310a5d452b15";

const FetchWeather = async (city, setWeatherData, setError) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();
    setWeatherData(data);
    setError("");
  } catch (err) {
    setError(err.message);
    setWeatherData(null);
  }
};

export default FetchWeather;
