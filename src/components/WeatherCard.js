import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherCard = ({ city, temperature, condition, icon }) => {
  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <p>{temperature}°</p>
      <p>{condition}</p>
      <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt={condition} />
    </div>
  );
};

export default WeatherCard;
