import { useState } from "react";

function WeatherOverview(props) {
  const tempInCelsius = Math.round(props.data.main.temp - 273.15);
  const mainDescription = props.data.weather[0].main;
  const details = props.data.weather[0].description;
  const capitalizedDetails = details
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div>
      <p>{`${tempInCelsius}°C`}</p>
      <p>{mainDescription}</p>
      <p>{capitalizedDetails}</p>
      <p>
        {props.getLocalDay(props.data.dt, props.data.timezone)} ◆{" "}
        {props.getLocalTime(props.data.dt, props.data.timezone)}
      </p>
    </div>
  );
}

export default WeatherOverview;
