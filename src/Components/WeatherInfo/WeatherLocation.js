import styles from "./WeatherLocation.module.css";

function WeatherLocation(props) {
  const getFlagEmoji = (countryCode) => {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  };

  return (
    <div className={styles.location}>
      {props.data.name}, {props.data.sys.country}{" "}
      <span className={styles.flag}>
        {getFlagEmoji(props.data.sys.country)}
      </span>
    </div>
  );
}

export default WeatherLocation;
