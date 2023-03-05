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

  const getLocalDay = (unixCode, utcOffset) => {
    let localDate = new Date((unixCode + utcOffset + 18000) * 1000);

    return localDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  const getLocalTime = (unixCode, utcOffset) => {
    let localDate = new Date((unixCode + utcOffset + 18000) * 1000);

    let localSeconds = localDate.getSeconds();
    let localMinutes =
      localSeconds === 0 ? localDate.getMinutes() : localDate.getMinutes() + 1;
    let localHour = localDate.getHours();

    return `${localHour}:${localMinutes.toString().padStart(2, "0")}`;
  };

  let success = (
    <div>
      <WeatherLocation data={props.data} />
      <WeatherImg data={props.data} />
      <WeatherOverview
        data={props.data}
        getLocalTime={getLocalTime}
        getLocalDay={getLocalDay}
      />
      <WeatherDetails data={props.data} getLocalTime={getLocalTime} />
    </div>
  );

  let error = <p>Oops. Couldn't find the city you're looking for.</p>;

  return <div>{props.data.cod === "404" ? error : success}</div>;
}

export default WeatherDiv;
