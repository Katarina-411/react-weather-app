import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [direction, setDirection] = useState("");

  function displayWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      condition: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function windDirection(response) {
    let deg = response.data.wind.deg;
    if (deg < 0) {
      deg = 360 - (Math.abs(deg) % 360);
    } else {
      deg = deg % 360;
    }
    let directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    let w = parseInt(deg / 45);
    setDirection(directions[w]);
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
      axios.get(url).then(windDirection);
    }
  }

  function enterCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city" onChange={enterCity} />
      <input type="submit" value="Search" />
    </form>
  );

  return (
    <div>
      {form}
      {weather ? (
        <div>
          <p>The current weather in {city} is:</p>
          <ul>
            <li>Temperature: {Math.round(weather.temperature)}°C</li>
            <li>Condition: {weather.condition}</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>
              Wind: {Math.round(weather.wind)}km/h / {direction}
            </li>
            <li>
              <img src={weather.icon} alt="Weather icon" />
            </li>
          </ul>
        </div>
      ) : (
        <p>Please enter a city name to see the current weather</p>
      )}
    </div>
  );
}
