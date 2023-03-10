import React from "react";

export default function SunriseSunset(props) {
  let hour = props.time.getHours();

  let minutes = props.time.getMinutes();
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
  return <div>{formatTime(hour)}</div>;
}
