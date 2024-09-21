import React, { useState, useRef, useEffect } from 'react';

const CitySearch = ({ onCitySelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [cities, setCities] = useState(['New York', 'London', 'Tokyo', 'Paris', 'Sydney']);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  const handleCitySelect = (city) => {
    onCitySelect(city);
    setSearchTerm(city);
    setIsOpen(false);
  };

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="city-search" ref={dropdownRef}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for a city"
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <div className="dropdown">
          {filteredCities.map((city, index) => (
            <div key={index} onClick={() => handleCitySelect(city)}>
              {city}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CitySearch;