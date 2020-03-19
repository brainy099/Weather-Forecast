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

export const fetchData = searchTerm => async dispatch => {
  const appId = "dedac1795a0a6d2c21830336fa5edc8b";
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=${appId}&units=metric`;
  let req = new Request(url, {
    method: "get"
  });
  let dates = [],
    temps = [];
  //fetch call
  try {
    dispatch(setDates([]));
    dispatch(setTemps([]));
    let response = await fetch(req);
    let data = await response.json();
    await dispatch(setWeather(data));
    await data.list.forEach(val => {
      dates.push(val.dt_txt);
      temps.push(val.main.temp);
    });
    await dispatch(setDates(dates));
    await dispatch(setTemps(temps));
  } catch (error) {
    console.log(error);
  }
};
