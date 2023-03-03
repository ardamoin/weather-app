function WeatherImg(props) {
    //through props, get the weather description and assign o source to the img based on that description
  return <img alt={props.data.weather[0].main}></img>;
}

export default WeatherImg;
