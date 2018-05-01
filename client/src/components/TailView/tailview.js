// import React, { Fragment } from 'react';
import React from 'react';
// import SandvineView from "../SandvineView";
// import LogsView from "../LogsView";
// import AAAView from "../AAAView";


// const switchView = (metric) => {
//   switch (metric.metric_source) {
//     case "Logs": return (
//       <LogsView sinr={metric.metric.sinr} time={metric.event_start_datetime} altitude={metric.metric.altitude} />
//     );
//       // break;
//     case "Sandvine": return (
//       <SandvineView sandvine={metric} />
//     );
//       // break;
//     case "AAA Usage": return (
//       <AAAView device={metric.metric.device_mac_address} download={metric.metric.usage_download_mb} upload={metric.metric.usage_upload} />
//     );
//       // break;
//       default: null
//   }
// }

// const TailView = (props) => {
//   console.log(props)
//   return (
//     <ul>
//       {props.metrics.map(metric => (
//         <div key={metric._id}>
//         {switchView(metric)}
//       </div>
//       ))}
//     </ul>
//     )
// };

const TailView = ({ metrics }) => {
  return (
    <ul>
      {metrics.map(metric => (
        <li key={metric._id} className="list-group-item">
          tail is: {metric.tail} ;
          time is: {metric.event_start_datetime}
          {/* <Chart data={metric.allthestuff} /> */}
        </li>
      ))}
    </ul>
  )
};

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