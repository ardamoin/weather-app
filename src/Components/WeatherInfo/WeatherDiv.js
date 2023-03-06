import WeatherDetails from "./WeatherDetails";
import WeatherLocation from "./WeatherLocation";
import WeatherOverview from "./WeatherOverview";
import styles from "./WeatherDiv.module.css";

function WeatherDiv(props) {
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

    return `${localHour.toString().padStart(2, "0")}:${localMinutes
      .toString()
      .padStart(2, "0")}`;
  };

  let success = (
    <div>
      <WeatherLocation data={props.data} />
      <WeatherOverview
        data={props.data}
        getLocalTime={getLocalTime}
        getLocalDay={getLocalDay}
      />
      <WeatherDetails data={props.data} getLocalTime={getLocalTime} />
    </div>
  );

  let error = (
    <p className={styles.error}>
      Oops. Couldn't find the city you're looking for.
    </p>
  );

  return <div>{props.data.cod === "404" ? error : success}</div>;
}

export default WeatherDiv;
