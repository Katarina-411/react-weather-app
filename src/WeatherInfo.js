import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WindDirection from "./WindDirection";
import WeatherTemperature from "./WeatherTemperature";
import SunriseSunset from "./SunriseSunset";
import "./weather.css";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="container weather">
        <div className="row mt-3">
          <div className="col-7">
            <h1>
              {props.data.city}, {props.data.country}
            </h1>
            <ul>
              <li>
                <FormattedDate date={props.data.date} />
              </li>
            </ul>
          </div>
          <div className="col-2">
            <div className="weather-current">
              <WeatherIcon code={props.data.icon} size={48} />
            </div>
            <div className="row">
              <div className="col">{props.data.condition}</div>
            </div>
          </div>
          <div className="col">
            <div className="weather-current">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>

            <div className="row">
              <div className="col">
                <span className="current-max">
                  {Math.round(props.data.max)}º
                </span>
                <span> | </span>
                <span className="current-min">
                  {Math.round(props.data.min)}º
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row mt-5 mb-3">
          <div className="col weather-additional">
            <p>Humidity</p>
            {props.data.humidity}%
          </div>
          <div className="col weather-additional">
            <p>Wind</p>
            {Math.round(props.data.wind * 3.6)}km/h |{" "}
            <WindDirection direction={props.data.direction} />
          </div>
          <div className="col weather-additional">
            <p>Sunrise</p>
            <SunriseSunset time={props.data.sunrise} />
          </div>
          <div className="col weather-additional">
            {" "}
            <p>Sunset</p>
            <SunriseSunset time={props.data.sunset} />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
