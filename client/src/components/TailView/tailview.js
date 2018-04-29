// import React, { Fragment } from 'react';
import React from 'react';
// import Plot from 'react-plotly.js';

const TailView = ({plane}) => {
  // const tailTime = tail.event_start_datetime;
  // const tailMetric = tail.metric;
  return (
    <div>
      graph goes where
      console.log(tailTime)
      console.log(tailMetric)
    </div>
    // <Fragment>
      // <Plot
      //   data={[
      //     {
      //       x: tailTime,
      //       y: tailMetric,
      //       type: 'scatter',
      //       mode: 'lines+points',
      //       market: {color: 'red'},
      //     },
      //     {type: 'bar', x: tailTime, y: tailMetric },
      //   ]}
      //   layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
      // />
    // </Fragment>
  )
};

export default TailView;
