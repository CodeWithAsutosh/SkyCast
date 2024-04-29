import axios from "axios";
import useWeatherStore from "../store/weatherStore";

const API_KEY = "c483f15def66fdf79f61de3b276e1402";
const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    const { name, main, wind, visibility, weather } = response.data;
    return {
      city: name,
      temperature: main.temp,
      pressure: main.pressure,
      humidity: main.humidity,
      speed: wind.speed,
      deg: wind.deg,
      visibility: visibility,
      description: weather[0].description,
      iconCode: weather[0].icon,
    };
  } catch (error) {
    throw new Error("Failed to fetch weather data");
  }
};

export const updateCityWeather = async (city) => {
  try {
    const weatherData = await fetchWeatherData(city);
    useWeatherStore.getState().updateWeatherData(city, weatherData);
  } catch (error) {
    console.error("Error updating weather data:", error);
  }
};
