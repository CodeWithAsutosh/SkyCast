import { create } from "zustand";

const useWeatherStore = create((set) => ({
  cities: [],
  addCity: (city) =>
    set((state) => ({
      cities: [
        ...state.cities,
        { city, temperature: 0, description: "", iconCode: "" },
      ],
    })),
  removeCity: (city) =>
    set((state) => ({
      cities: state.cities.filter((item) => item.city !== city),
    })),
  updateWeatherData: (city, weatherData) =>
    set((state) => ({
      cities: state.cities.map((item) =>
        item.city === city ? { ...item, ...weatherData } : item
      ),
    })),
}));

export default useWeatherStore;
