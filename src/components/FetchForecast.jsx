// src/components/FetchForecast.jsx
const API_KEY = "b54bb537858a694861d8310a5d452b15";

const FetchForecast = async (city, setForecastData, setError) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) throw new Error("Forecast data unavailable");
    const data = await response.json();
    setForecastData(data.list.filter((item) => item.dt_txt.includes("12:00:00")));
  } catch (err) {
    setError(err.message);
    setForecastData(null);
  }
};

export default FetchForecast;
