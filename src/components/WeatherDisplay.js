import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherDisplay = ({ city, unit }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
        setWeatherData(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch weather data. Please try again.');
        setWeatherData(null);
      }
    };

    fetchWeatherData();
  }, [city]);

  if (error) return <div className="error">{error}</div>;
  if (!weatherData) return <div>Loading...</div>;

  const temperature = unit === 'celsius' ? weatherData.main.temp : (weatherData.main.temp * 9/5) + 32;

  return (
    <div className="weather-display">
      <h2>{city}</h2>
      <p>Temperature: {temperature.toFixed(1)}°{unit === 'celsius' ? 'C' : 'F'}</p>
      <p>Condition: {weatherData.weather[0].description}</p>
      <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="Weather icon" />
    </div>
  );
};

export default WeatherDisplay;
