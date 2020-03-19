import React from "react";
import "./App.css";
import PlotComponent from "./components/Plot.component";
import { setLocation, fetchData } from "./redux/actions";
import { connect } from "react-redux";

const App = ({ state, setLocation, fetchData }) => {
  const { location, weather, dates, temps } = state;

  const handleSubmit = event => {
    event.preventDefault();
    fetchData(location);
  };

  const handleChange = event => setLocation(event.target.value);

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
  fetchData: item => dispatch(fetchData(item))
});

const mapStateToProps = state => ({
  state: state
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
