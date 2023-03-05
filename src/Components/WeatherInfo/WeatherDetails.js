function WeatherDetails(props) {
  return (
    <div>
      <div className="row">
        <dl>
          <dt>Sunrise</dt>
          <dd>
            {props.getLocalTime(props.data.sys.sunrise, props.data.timezone)}
          </dd>
        </dl>
        <dl>
          <dt>Sunset</dt>
          <dd>
            {props.getLocalTime(props.data.sys.sunset, props.data.timezone)}
          </dd>
        </dl>
      </div>
      <div className="row">
        <dl>
          <dt>Wind Speed</dt>
          <dd>{props.data.wind.speed}m/s</dd>
        </dl>
        <dl>
          <dt>Feels Like</dt>
          <dd>{Math.round(props.data.main.feels_like - 273.15)}°C</dd>
        </dl>
      </div>
      <div className="row">
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
