import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { reducer } from "./redux/reducer";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import App from "./App";
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

test("renders Weather link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(getByText("Weather")).toBeInTheDocument();
});
