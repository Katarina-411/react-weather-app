import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weather-forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index === 0) {
              return null;
            }
            if (index < 7) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "bb0df6985c2eab6a171d64a6bacbb4e1";
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/onecall?";
    let units = "metric";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let url = `${apiEndpoint}lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(handleResponse);

    return "Loading daily forecast...";
  }
}
