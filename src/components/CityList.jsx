import React from "react";
import useWeatherStore from "../store/weatherStore";
import WeatherDisplay from "./WeatherDisplay";

const CityList = () => {
  const { cities, removeCity } = useWeatherStore();

  return (
    <div className="CityList">
      {cities.map((city, i) => (
        <div
          key={i}
          style={{
            borderRight: `${
              i !== cities.length - 1 ? "1px solid grey" : "0px solid white"
            }`,
          }}
        >
          <WeatherDisplay weatherData={city} />
          <button onClick={() => removeCity(city.city)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default CityList;
