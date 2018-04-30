// import React, { Fragment } from 'react';
import React from 'react';
// import Plot from 'react-plotly.js';

const TailView = ({metrics}) => {
  return(
  <ul>
    {metrics.map(metric => (
      <li key={metric} className="list-group-item">
        tail is: {metric.tail} ;
          time is: {metric.event_start_datetime}
      </li>
    ))}
  </ul>
)};


export default TailView;

// const TailView = (props) => {
//   console.log(props.planes)
//   // const tailTime = tail.event_start_datetime;
//   // const tailMetric = tail.metric;
//   return (
//     <div>
//       PRINT THIS PLEASE!
//       <p>Inside Tailview comp</p>
//       <h3>graph goes here</h3>

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
//   )
// };





// const TailView = ({metrics}) => (
//   <ul>
//     metrics.map(metric => (
//       <div>
//         {(() => {
//           switch(metric.metric_source){
//             case "Logs": return(
//                 <LogsView log = {metric}  key={metric.id}/>
//               );
//               break;
//             case "Sandvine": return(
//                 <SandvineView sandvine = {metric} key={metric.id}/>
//               );
//               break;
//             case "AAA Usage": return(
//                 <AAAView aaa = {metric} key={metric.id}/>
//               );
//               break;
//           }
//         })()}
//       </div>
//     ))
//   </ul>
// );
