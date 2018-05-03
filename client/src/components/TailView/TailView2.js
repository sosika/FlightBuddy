import React, { Component } from 'react';
import LogsView from "../LogsView";
// import AAAView from "../AAAView";

// const TailView = ({ metrics }) => {
//   return (
//     <ul>
//       {metrics.map((metric, i) => (
//         <li key={i} className="list-group-item">
//           tail is: {metric.tail} ;
//           time is: {metric.event_start_datetime}
//         </li>
//       ))}
//     </ul>
//   )
// };

class TailView2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData1:{},
      chartData2:{},
    };
  }

  componentWillMount(){
    this.getChartData()
  }

  getChartData = () => {
    const logsMetric = this.props.metrics.filter((metric) => metric.metric_source === 'Logs');
    const AaaMetric = this.props.metrics.filter((metric) => metric.metric_source === 'AAA Usage');
    // const SandMetric = props.metrics.filter((metric) => metric.metric_source === 'Sandvine');
    const logsTime = logsMetric.map(object => object.event_start_datetime);
    const logsSinr = logsMetric.map(object => object.metric.sinr);
    const aaaMac = AaaMetric.map(object => object.metric.device_mac_address);
    const aaaUsage = AaaMetric.map(object => object.metric.usage_download_mb);
    this.setState({
      chartData1:{
        label: logsTime,
        data: logsSinr,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      },

      chartData2:{
        label: aaaMac,
        data: aaaUsage,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    })
  }

  render() {
    return (
      <div>
        <LogsView chartData1={this.state.chartData1} chartData2={this.state.chartData2}  />
      </div>
    );
  }

}

export default TailView2;

// Option 1
  // <LogsView chartData1={this.state.chartData1} />
  // <AAAView chartData2={this.state.chartData2} />

  // Option 2
