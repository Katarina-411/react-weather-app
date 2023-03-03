import React from "react";

export default function WindDirection(props) {
  let directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  let deg = props.direction;
  if (deg < 0) {
    deg = 360 - (Math.abs(deg) % 360);
  } else {
    deg = deg % 360;
  }
  let w = parseInt(deg / 45);
  return <span>{directions[w]}</span>;
}
