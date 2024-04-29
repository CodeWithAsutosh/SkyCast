import React, { useEffect } from "react";
import CitySearchForm from "./components/CitySearchForm";
import CityList from "./components/CityList";
import useWeatherStore from "./store/weatherStore";
import { updateCityWeather } from "./services/weatherApi";
import "./App.css";

const App = () => {
  const { cities } = useWeatherStore();

  useEffect(() => {
    cities.forEach((city) => updateCityWeather(city.city));
  }, [cities]);

  return (
    <div className="WeatherApp">
      <h1>SkyCast</h1>
      <CitySearchForm />
      <CityList />
    </div>
  );
};

export default App;
