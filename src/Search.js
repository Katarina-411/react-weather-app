import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import WeatherInfo from "./WeatherInfo";

export default function Search() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  function displayWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      condition: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      direction: response.data.wind.deg,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length < 3) {
      alert("Please enter a city name to see the current weather");
    } else {
      let apiKey = "bb0df6985c2eab6a171d64a6bacbb4e1";
      let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
      let units = "metric";
      let url = `${apiEndpoint}q=${city}&appid=${apiKey}&units=${units}`;
      axios.get(url).then(displayWeather);
    }
  }

  function enterCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row mt-3 mb-3">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city"
            onChange={enterCity}
            className="form-control"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-secondary w-100"
          />
        </div>
      </div>
    </form>
  );

  return (
    <div>
      {form}
      {weather ? (
        <WeatherInfo data={weather} />
      ) : (
        <p className="weather">
          Please enter a city name to see the current weather
        </p>
      )}
    </div>
  );
}
