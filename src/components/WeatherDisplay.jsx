import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  const direction = (deg) => {
    if (deg === 90) {
      return "E";
    } else if (deg === 180) {
      return "S";
    } else if (deg === 270) {
      return "W";
    } else if (deg === 360 || deg === 0) {
      return "N";
    } else if (deg > 0 && deg < 90) {
      return "NE";
    } else if (deg > 90 && deg < 180) {
      return "SE";
    } else if (deg > 180 && deg < 270) {
      return "SW";
    } else if (deg > 270 && deg < 360) {
      return "NW";
    }
  };

  return (
    <div className="WeatherDisplay">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "150px",
          marginBottom: "20px",
        }}
      >
        <h2>{weatherData.city}</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          <img
            src={`http://openweathermap.org/img/w/${weatherData.iconCode}.png`}
            alt={weatherData.description}
          />
          <h3 style={{ margin: 0, padding: 0 }}>{weatherData.temperature}°C</h3>
        </div>
      </div>
      <p>Weather: {weatherData.description}</p>
      <p>Pressure: {weatherData.pressure} mbar</p>
      <p>Humidity: {weatherData.humidity}%</p>
      <p>Visibility: {weatherData.visibility / 1000} km</p>
      <p>
        Wind {weatherData.speed}m/s {direction(weatherData.deg)}
      </p>
    </div>
  );
};

export default WeatherDisplay;
