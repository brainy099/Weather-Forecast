import { fromJS } from "immutable";

import { actionTypes } from "./types";

const INITIAL_STATE = fromJS({
  location: "",
  weather: {},
  dates: [],
  temps: []
});

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_LOCATION:
      return state.set("location", action.payload);
    case actionTypes.SET_WEATHER:
      return state.set("weather", fromJS(action.payload));
    case actionTypes.SET_TEMPS:
      return state.set("temps", fromJS(action.payload));
    case actionTypes.SET_DATES:
      return state.set("dates", fromJS(action.payload));
    default:
      return state;
  }
};
