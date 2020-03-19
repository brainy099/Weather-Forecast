import { reducer } from "../redux/reducer";
import { fromJS } from "immutable";

describe("reducer", () => {
  it("should return the intial state", () => {
    expect(reducer(undefined, {})).toEqual(
      fromJS({
        location: "",
        weather: {},
        dates: [],
        temps: []
      })
    );
  });

  it("should react to an action with the type 'SET_LOCATION' ", () => {
    let location = "delhi";
    expect(
      reducer(undefined, { type: "SET_LOCATION", payload: location })
    ).toEqual(
      fromJS({
        location: location,
        weather: {},
        dates: [],
        temps: []
      })
    );
  });

  it("should react to an action with the type 'SET_WEATHER' ", () => {
    let weather = { some: "weather" };
    expect(
      reducer(undefined, { type: "SET_WEATHER", payload: weather })
    ).toEqual(
      fromJS({
        location: "",
        weather: weather,
        dates: [],
        temps: []
      })
    );
  });

  it("should react to an action with the type 'SET_DATES' ", () => {
    let date = ["2020-02-01"];
    expect(reducer(undefined, { type: "SET_DATES", payload: date })).toEqual(
      fromJS({
        location: "",
        weather: {},
        dates: date,
        temps: []
      })
    );
  });
  it("should react to an action with the type 'SET_TEMPS' ", () => {
    let temps = [30, 40];
    expect(reducer(undefined, { type: "SET_TEMPS", payload: temps })).toEqual(
      fromJS({
        location: "",
        weather: {},
        dates: [],
        temps: temps
      })
    );
  });
});
