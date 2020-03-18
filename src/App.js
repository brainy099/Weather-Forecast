import React from "react";
import "./App.css";
import PlotComponent from "./components/Plot.component";
import {
  setDates,
  setLocation,
  setWeather,
  setTemps,
  pushToTemps,
  pushToDates
} from "./redux/actions";
import { connect } from "react-redux";

const App = ({
  state,
  setLocation,
  setWeather,
  setTemps,
  setDates,
  pushToDates,
  pushToTemps
}) => {
  const { location, weather, dates, temps } = state;

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
      await data.list.forEach(val => {
        pushToDates(val.dt_txt);
        pushToTemps(val.main.temp);
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
};

const mapDispatchToProps = dispatch => ({
  setLocation: item => dispatch(setLocation(item)),
  setWeather: item => dispatch(setWeather(item)),
  setTemps: item => dispatch(setTemps(item)),
  setDates: item => dispatch(setDates(item)),
  pushToDates: item => dispatch(pushToDates(item)),
  pushToTemps: item => dispatch(pushToTemps(item))
});

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
