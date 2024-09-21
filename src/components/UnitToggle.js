import React from 'react';

const UnitToggle = ({ currentUnit, onUnitChange }) => {
  return (
    <div className="unit-toggle">
      <button 
        onClick={() => onUnitChange('celsius')}
        className={currentUnit === 'celsius' ? 'active' : ''}
      >
        °C
      </button>
      <button 
        onClick={() => onUnitChange('fahrenheit')}
        className={currentUnit === 'fahrenheit' ? 'active' : ''}
      >
        °F
      </button>
    </div>
  );
};

export default UnitToggle;