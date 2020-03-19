import React from "react";
import renderer from "react-test-renderer";
import { fromJS } from "immutable";
import PlotComponent from "../components/Plot.component";

describe("components", () => {
  describe("<PlotComponent />", () => {
    global.Plotly = {
      newPlot: () => {}
    };

    global.document = {
      getElementById: () => {
        return {
          on: () => {}
        };
      }
    };

    it("renders correctly", () => {
      const tree = renderer
        .create(<PlotComponent xData={fromJS({})} yData={fromJS({})} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
