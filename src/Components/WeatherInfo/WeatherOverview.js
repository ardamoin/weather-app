import style from "./WeatherOverview.module.css";

function WeatherOverview(props) {
  const tempInCelsius = Math.round(props.data.main.temp - 273.15);
  const mainDescription = props.data.weather[0].main;
  const details = props.data.weather[0].description;
  const capitalizedDetails = details
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className={style.overview}>
      <p className={style.temperature}>{`${tempInCelsius}°C`}</p>
      <p className={style.description}>{mainDescription}</p>
      <p className={style["detailed-description"]}>{capitalizedDetails}</p>
      <p className={style.details}>
        {props.getLocalDay(props.data.dt, props.data.timezone)} ◆{" "}
        {props.getLocalTime(props.data.dt, props.data.timezone)}
      </p>
    </div>
  );
}

export default WeatherOverview;
