import React from 'react';

const ForecastCard = ({ data, unit }) => {
  const date = new Date(data.dt * 1000);
  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
  const temp = unit === 'celsius' ? data.main.temp : (data.main.temp * 9/5) + 32;

  return (
    <div className="forecast-card">
      <h3>{dayOfWeek}</h3>
      <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="Weather icon" />
      <p>{temp.toFixed(1)}°{unit === 'celsius' ? 'C' : 'F'}</p>
      <p>{data.weather[0].description}</p>
    </div>
  );
};

export default ForecastCard;