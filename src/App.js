import React, { useState } from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import CitySearch from './components/CitySearch';
import FiveDayForcast from './components/FiveDayForcast';
import UnitToggle from './components/UnitToggle';
import './App.css';

function App() {
  const [selectedCity, setSelectedCity] = useState('New York');
  const [tempUnit, setTempUnit] = useState('celsius');

  return (
    <div className="App">
      <h1>Weather Forcast App</h1>
      <CitySearch onCitySelect={setSelectedCity} />
      <UnitToggle currentUnit={tempUnit} onUnitChange={setTempUnit} />
      <WeatherDisplay city={selectedCity} unit={tempUnit} />
      <FiveDayForcast city={selectedCity} unit={tempUnit} />
    </div>
  );
}

export default App;