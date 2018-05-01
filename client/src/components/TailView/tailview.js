// import React, { Fragment } from 'react';
import React from 'react';
import SandvineView from "../SandvineView";
import LogsView from "../LogsView";
import AAAView from "../AAAView";
import DataView from"../DataView";


// const switchView = (metric) => {
//   console.log("this is switchView", metric)
//   switch (metric.metric_source) {
//     case "Logs": return (
//       <LogsView sinr={metric.metric.sinr} time={metric.event_start_datetime} altitude={metric.metric.altitude} />
//     );
//       // break;
//     // case "Sandvine": return (
//     //   <SandvineView sandvine={metric} />
//     // );
//       // break;
//     case "AAA Usage": return (
//       <AAAView device={metric.metric.device_mac_address} download={metric.metric.usage_download_mb} upload={metric.metric.usage_upload} />
//     );
//       // break;
//       default: null
//   }
// }
// can remove switch/case once the others are working.


const TailView = (props) => {
  console.log(props)
  // return (f
  //   <ul>
  //     {props.metrics.map((metric, i) => (
  //       <li key={i}>
  //       {switchView(metric)}
  //     </li>
  //     ))}
  //   </ul>
  //   )

   const logsMetric = props.metrics.filter((metric) => metric.metric_source === 'Logs');
   const AaaMetric = props.metrics.filter((metric) => metric.metric_source === 'AAA Usage');
   const SandMetric = props.metrics.filter((metric) => metric.metric_source === 'Sandvine');

   //extract to Tail.js--do logic in tail.js file, send down views to this component
  const data = props.metrics.reduce((d, metric) => {

    d[metric.metric_source] = Array.isArray(d[metric.metric_source]) 
      ? [...d[metric.metric_source], metric]
      : [metric];
    
    // if (!Array.isArray(d[metric.metric_source])) {
    //   d[metric.metric_source] = [metric];
    // } else {
    //   d[metric.metric_source].push(metric);
    // }
    // return d;
  }, {});

  // props.metrics.forEach((metric, i) => {
  //   data[metric.metric_source] = metric
  // });
    
    return (<ul>
      <li>
        {/* below: is correctly formatted, need to change the others. */}

        <DataView data={data["Logs"]} type={"Logs"} />
      </li>
      <li>
        <SandvineView data={data["Sandvine"]} />
      </li>
      <li>
        <AAAView data={AaaMetric} />
      </li>
      <li>
        {logsMetric ? <LogsView data={data["AAAUsage"]} /> : <div>Loading logs data...</div> }
      </li>
    </ul>
  )
};
export default TailView;

// const TailView = ({ metrics }) => {
//   return (
//     <ul>
//       {metrics.map(metric => (
//         <li key={metric._id} className="list-group-item">
//           tail is: {metric.tail} ;
//           time is: {metric.event_start_datetime}
//           {/* <Chart data={metric.allthestuff} /> */}
//         </li>
//       ))}
//     </ul>
//   )
// };

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