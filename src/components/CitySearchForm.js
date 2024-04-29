import React, { useState, useEffect, useRef } from "react";
import useWeatherStore from "../store/weatherStore";

const CitySearchForm = () => {
  const [city, setCity] = useState("");
  const { addCity } = useWeatherStore();
  const inputRef = useRef(null); // Initialize ref with null

  useEffect(() => {
    // Check if inputRef.current exists before accessing it
    if (inputRef.current) {
      inputRef.current.focus(); // Use inputRef.current to access the input element
    }
  }, []); // No dependencies needed

  const handleSubmit = (e) => {
    e.preventDefault();
    addCity(city);
    setCity("");
  };

  return (
    <div className="CitySearchForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter a city"
          ref={inputRef}
        />
        <button type="submit">Add City</button>
      </form>
    </div>
  );
};

export default CitySearchForm;
