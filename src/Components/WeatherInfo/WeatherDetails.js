function WeatherDetails(props) {
  return (
    <div>
      <div className="row">
        <dl>
          <dt>Sunrise</dt>
          <dd>{props.data.sys.sunrise}</dd>
        </dl>
        <dl>
          <dt>Sunset</dt>
          <dd>{props.data.sys.sunset}</dd>
        </dl>
      </div>
      <div className="row">
        <dl>
          <dt>Wind Speed</dt>
          <dd>{props.data.wind.speed}</dd>
        </dl>
        <dl>
          <dt>Feels Like</dt>
          <dd>{props.data.main.feels_like}</dd>
        </dl>
      </div>
      <div className="row">
        <dl>
          <dt>Humidity</dt>
          <dd>{props.data.main.humidity}</dd>
        </dl>
        <dl>
          <dt>Pressure</dt>
          <dd>{props.data.main.pressure}</dd>
        </dl>
      </div>
    </div>
  );
}

export default WeatherDetails;
