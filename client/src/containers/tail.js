import React, { Component } from "react";
import Form from "../components/Form/form";
import API from "../API.js";
import LogsView from "../components/LogsView/LogsView";

export default class Tail extends Component {
  constructor(){
    super();
    this.state = {
      plane: "",
      metrics: [{}],
      chartData1: {},
      chartData2: {},
      chartData3: {},
      chartData4: {}
    };
  }


  handleInputChange = event => {
    const { value } = event.target;
    this.setState({
      plane: value
    });
  };

  getChartData = () => {
    const logsMetric = this.state.metrics.filter((metric) => metric.metric_source === 'Logs');
    const AaaMetric = this.state.metrics.filter((metric) => metric.metric_source === 'AAA Usage');

    const logsTime = logsMetric.map(object => object.event_start_datetime);
    const logsSinr = logsMetric.map(object => Math.ceil(JSON.parse(object.metric).sinr));
    const logsAlt = logsMetric.map(object => Math.ceil(JSON.parse(object.metric).altitude_ft));
    const logsRtt = logsMetric.map(object => Math.ceil(JSON.parse(object.metric).rtt_ping));

    const aaaMac = AaaMetric.map(object => JSON.parse(object.metric).device_mac_address);
    const aaaUsage = AaaMetric.map(object => JSON.parse(object.metric).usage_download_mb);

    this.setState({
      chartData1:{
        labels: logsTime,
        datasets:[
          {
            label:'sinr',
            data:logsSinr,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
          }
        ]
      },

      chartData2:{
        labels: aaaMac,
        datasets:[
          {
            label:'MB',
            data: aaaUsage,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(94, 255, 51, 0.2)',
                'rgba(255, 51, 249, 0.2)',
                'rgba(51, 184, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(94, 255, 51, 1)',
                'rgba(255, 51, 249, 1)',
                'rgba(51, 184, 255, 1)'
            ],
            borderWidth: 1
          }
        ]
      },

      chartData3:{
        labels: logsTime,
        datasets:[
          {
            label:'Feet',
            data:logsAlt,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      },

      chartData4:{
        labels: logsTime,
        datasets:[
          {
            label:'ms',
            data:logsRtt,
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
          }
        ]
      }
    })

  }

  grabAllPlanes = () => {
    API.grabAllPlanes({
      plane: this.state.plane
    })
    .then(response => this.setState({
      plane: response.data
    })
    )
    .catch(err => console.log("this is an error coming back: ", err))
  }

  getMetrics = () => {
    API.getPlanes(this.state.plane)
      .then(res => {
        console.log('res',res)
        this.setState({
          metrics: res.data
        })
        console.log('metrics', this.state.metrics)
      }
      )
      .then( ()=> {
        this.getChartData()
        console.log(this.state)} )
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getMetrics();
  };


  render() {
    return (
        <div>
          <Form
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
          <div>
          {this.state.metrics.length > 1  &&
            <LogsView
            chartData1={this.state.chartData1}
            chartData2={this.state.chartData2}
            chartData3={this.state.chartData3}
            chartData4={this.state.chartData4}
            redraw/>
          }
          </div>
        </div>
    )
  }
};
