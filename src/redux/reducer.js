import { actionTypes } from "./types";

const INITIAL_STATE = {
  location: "",
  weather: {},
  dates: [],
  temps: []
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_LOCATION:
      return { ...state, location: action.payload };
    case actionTypes.SET_WEATHER:
      return { ...state, weather: action.payload };
    case actionTypes.SET_TEMPS:
      return { ...state, temps: action.payload };
    case actionTypes.SET_DATES:
      return { ...state, dates: action.payload };
    default:
      return state;
  }
};
