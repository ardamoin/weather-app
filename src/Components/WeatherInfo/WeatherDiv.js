import { useState } from "react";
import WeatherDetails from "./WeatherDetails";
import WeatherImg from "./WeatherImg";
import WeatherLocation from "./WeatherLocation";
import WeatherOverview from "./WeatherOverview";

function WeatherDiv(props) {
  /**
   * return the following
   *
   * component for city, country, flag emoji ---
   * component for weatherimg
   * component for weather info overview (e.g. 21C thunderstorm, friday 16, 09.41am)
   * component for sunrise & sunset
   * component for wind and feels like
   * component for humidity and precipitation
   *
   */

  let success = (
    <div>
      <WeatherLocation data={props.data} />
      <WeatherImg data={props.data} />
      <WeatherOverview data={props.data} />
      <WeatherDetails data={props.data} />
    </div>
  );

  let error = <p>Oops. Couldn't find the city you're looking for.</p>;

  return <div>{props.data.cod === "404" ? error : success}</div>;
}

export default WeatherDiv;
