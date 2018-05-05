import React, { Component } from "react";
import Form from "../components/Form/form";
import API from "../API.js";
import LogsView from "../components/LogsView/LogsView";
import Summary from '../components/Summary/Summary';

export default class Tail extends Component {
  constructor(){
    super();
    this.state = {
      plane: "",
      numberOfDev: 0,
      totalUsage: 0,
      metrics: [{}],
      chartData1: {},
      chartData2: {},
      chartData3: {},
      chartData4: {},
      chartData5: {},
      chartData6: {},
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

    const numberOfDev = Math.max(...logsMetric.map(object => JSON.parse(object.metric).total_pass));

    const logsTime = logsMetric.map(object => object.event_start_datetime);
    const logsSinr = logsMetric.map(object => Math.ceil(JSON.parse(object.metric).sinr));
    const logsAlt = logsMetric.map(object => Math.ceil(JSON.parse(object.metric).altitude_ft));
    const logsRtt = logsMetric.map(object => Math.ceil(JSON.parse(object.metric).rtt_ping));
    const logsDrc = logsMetric.map(object => Math.ceil(JSON.parse(object.metric).avg_drc_kbps));
    const logsBaAircraft = logsMetric.map(object => Math.ceil(JSON.parse(object.metric).number_of_ba_aircraft));
    const logsCaAircraft = logsMetric.map(object => Math.ceil(JSON.parse(object.metric).number_of_ca_aircraft));

    const aaaMac = AaaMetric.map(object => JSON.parse(object.metric).device_mac_address);
    const aaaUsage = AaaMetric.map(object => JSON.parse(object.metric).usage_download_mb);
    const totalUsage = aaaUsage.reduce((a, b) => a + b);

    this.setState({
      numberOfDev: numberOfDev,
      totalUsage: totalUsage,

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
      },

      chartData5:{
        labels: logsTime,
        datasets:[
          {
            label:'drc',
            data:logsDrc,
            backgroundColor: 'rgba(185, 234, 175, 0.2)',
            borderColor: 'rgba(185, 234, 175,1)',
            borderWidth: 1
          }
        ]
      },

      chartData6:{
        labels: logsTime,
        datasets:[
          {
            label:'Business Aircraft',
            data:logsBaAircraft,
            backgroundColor: 'rgba(175, 110, 221, 0.2)',
            borderColor: 'rgba(175, 110, 221, 1)',
            borderWidth: 1
          },
          {
            label:'Commercial Aircraft',
            data:logsCaAircraft,
            backgroundColor: 'rgba(104, 101, 198, 0.2)',
            borderColor: 'rgba(104, 101, 198, 1)',
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
            <div>
              <Summary
                devices={this.state.numberOfDev}
                totalUsage={this.state.totalUsage}
              />
              <LogsView
                chartData1={this.state.chartData1}
                chartData2={this.state.chartData2}
                chartData3={this.state.chartData3}
                chartData4={this.state.chartData4}
                chartData5={this.state.chartData5}
                chartData6={this.state.chartData6}
              redraw/>
            </div>
          }
          </div>
        </div>
    )
  }
};
