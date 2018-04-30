// import React, { Fragment } from 'react';
import React from 'react';
// import Plot from 'react-plotly.js';

const TailView = ({metrics}) => (
  <ul>
    {metrics.map(metric => (
      <li key={metric} className="list-group-item">
          tail is: {metric.tail} ;
          time is: {metric.event_start_datetime}
      </li>
    ))}
  </ul>
);

export default TailView;



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
