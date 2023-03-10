import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WindDirection from "./WindDirection";
import WeatherTemperature from "./WeatherTemperature";
import "./styles.css";

export default function WeatherInfo(props) {
  return (
    <div className="weather">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.condition}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div>
            <WeatherIcon code={props.data.icon} size={48} />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6 mb-3">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>
              Wind: {Math.round(props.data.wind)}km/h |{" "}
              <WindDirection direction={props.data.direction} />
            </li>
            <li>Sunrise:</li>
            <li>Sunset:</li>
          </ul>
        </div>
        <hr />
      </div>
    </div>
  );
}
