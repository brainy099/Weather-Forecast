import { actionTypes } from "./types";

export const setLocation = item => ({
  type: actionTypes.SET_LOCATION,
  payload: item
});

export const setWeather = item => ({
  type: actionTypes.SET_WEATHER,
  payload: item
});

export const setTemps = item => ({
  type: actionTypes.SET_TEMPS,
  payload: item
});

export const setDates = item => ({
  type: actionTypes.SET_DATES,
  payload: item
});

export const pushToTemps = item => ({
  type: actionTypes.PUSH_TO_TEMPS,
  payload: item
});

export const pushToDates = item => ({
  type: actionTypes.PUSH_TO_DATES,
  payload: item
});
