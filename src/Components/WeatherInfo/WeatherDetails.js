import styles from './WeatherDetails.module.css';

function WeatherDetails(props) {
  return (
    <div>
      <div className={`${styles.row} ${styles['row-underline']}`}>
        <dl>
          <span className={styles.emoji}>☀️</span>
          <dt>Sunrise</dt>
          <dd>
            {props.getLocalTime(props.data.sys.sunrise, props.data.timezone)}
          </dd>
        </dl>
        <dl>
          <span className={styles.emoji}>🌑</span>
          <dt>Sunset</dt>
          <dd>
            {props.getLocalTime(props.data.sys.sunset, props.data.timezone)}
          </dd>
        </dl>
      </div>
      <div className={`${styles.row} ${styles['row-underline']}`}>
        <dl>
          <dt>Wind Speed</dt>
          <dd>{props.data.wind.speed}m/s</dd>
        </dl>
        <dl>
          <dt>Feels Like</dt>
          <dd>{Math.round(props.data.main.feels_like - 273.15)}°C</dd>
        </dl>
      </div>
      <div className={styles.row}>
        <dl>
          <dt>Humidity</dt>
          <dd>{props.data.main.humidity}%</dd>
        </dl>
        <dl>
          <dt>Pressure</dt>
          <dd>{props.data.main.pressure} hPa</dd>
        </dl>
      </div>
    </div>
  );
}

export default WeatherDetails;
