function WeatherLocation(props) {
  const getFlagEmoji = (countryCode) => {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  };

  return (
    <div>
      {props.data.name}, {props.data.sys.country} {getFlagEmoji(props.data.sys.country)}
    </div>
  );
}

export default WeatherLocation;