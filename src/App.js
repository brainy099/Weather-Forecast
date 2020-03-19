import React from "react";
import "./App.css";
import PlotComponent from "./components/Plot.component";
import { setLocation, fetchData } from "./redux/actions";
import { connect } from "react-redux";

const App = ({ redux, setLocation, fetchData }) => {
  const handleSubmit = event => {
    event.preventDefault();
    fetchData(redux.get("location"));
  };

  const handleChange = event => setLocation(event.target.value);

  let currentTemp = "Specify a location";
  if (redux.getIn(["weather", "list"])) {
    currentTemp = redux.getIn(["weather", "list", "0", "main", "temp"]);
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
            value={redux.get("location")}
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
        xData={redux.get("dates")}
        yData={redux.get("temps")}
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
  redux: state
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
