import "./App.css";
import "./Components/Search/SearchDiv";
import SearchDiv from "./Components/Search/SearchDiv";
import { useState } from "react";
import WeatherDiv from "./Components/WeatherInfo/WeatherDiv";

function App() {
  const [responseData, setResponseData] = useState({});

  const [city, setCity] = useState("");

  const getData = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      let weatherData = await response.json();
      setResponseData(weatherData);
      setCity(weatherData.name);
      console.log(weatherData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <SearchDiv onGetData={getData} city={city} onSetCity={setCity} />
      {Object.keys(responseData).length !== 0 ? (
        <WeatherDiv data={responseData} />
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default App;
