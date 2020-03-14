import React, { useState } from "react";
import "./App.css";
import PlotComponent from "./components/Plot.component";

function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({});
  const [dates, setDates] = useState([]);
  const [temps, setTemps] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    fetchData(location);
  };

  const handleChange = event => setLocation(event.target.value);

  const fetchData = async searchTerm => {
    const appId = "dedac1795a0a6d2c21830336fa5edc8b";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=${appId}&units=metric`;
    let req = new Request(url, {
      method: "get"
    });
    //fetch call
    try {
      setDates([]);
      setTemps([]);
      let response = await fetch(req);
      let data = await response.json();
      await setWeather(data);
      await data.list.map(val => {
        setDates(oldDates => [...oldDates, val.dt_txt]);
        setTemps(oldTemp => [...oldTemp, val.main.temp]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  let currentTemp = "Specify a location";
  if (weather.list) {
    currentTemp = weather.list[0].main.temp;
  }

  return (
    <div className="wrapper">
      <h1>Weather</h1>
      <form onSubmit={handleSubmit}>
        <label>
          I want to know the weather for
          <input
            onChange={handleChange}
            placeholder={"city, country"}
            value={location}
            type="text"
          />
        </label>
        <button type="submit">submit</button>
      </form>
      <p className="temp-wrapper">
        <span className="temp">{currentTemp}</span>
        <span className="temp-symbol">°C</span>
      </p>
      <PlotComponent
        className="graph"
        xData={dates}
        yData={temps}
        type="scatter"
      />
    </div>
  );
}

export default App;
