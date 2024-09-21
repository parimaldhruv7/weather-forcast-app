import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ForecastCard from './ForecastCard';

const FiveDayForcast = ({ city, unit }) => {
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=2a8cd3aae7ae227cb5bfa0b14b6d97a5&units=metric`);
        setForecastData(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch forecast data. Please try again.');
        setForecastData(null);
      }
    };

    fetchForecastData();
  }, [city]);

  if (error) return <div className="error">{error}</div>;
  if (!forecastData) return <div>Loading forecast...</div>;

  const dailyData = forecastData.list.filter((reading, index) => index % 8 === 0);

  return (
    <div className="five-day-forecast">
      <h2>5-Day Forecast</h2>
      <div className="forecast-cards">
        {dailyData.map((day, index) => (
          <ForecastCard key={index} data={day} unit={unit} />
        ))}
      </div>
    </div>
  );
};

export default FiveDayForcast;