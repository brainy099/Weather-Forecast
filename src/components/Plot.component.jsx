import React from "react";
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

const PlotComponent = props => {
  return (
    <Plot
      data={[
        {
          x: props.xData,
          y: props.yData,
          type: props.type
        },
        {
          margin: {
            t: 0,
            r: 0,
            l: 30
          }
        }
      ]}
      config={{ displayModeBar: false }}
    />
  );
};

export default PlotComponent;
