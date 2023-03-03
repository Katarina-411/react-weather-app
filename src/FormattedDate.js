import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.date.getMonth()];
  let date = props.date.getDate();
  let hour = props.date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  function formatTime() {
    if (hour === 12) {
      return `${hour}:${minutes} pm`;
    }
    if (hour >= 13) {
      hour = `${hour - 12}`;
      return `${hour}:${minutes} pm`;
    } else {
      return `${hour}:${minutes} am`;
    }
  }
  return (
    <div>
      <div>
        {day}, {date} {month}{" "}
      </div>
      <div> {formatTime(hour)}</div>
    </div>
  );
}
