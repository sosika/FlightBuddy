import React, {Component} from "react";
import { Line, Bar, Radar } from "react-chartjs-2";

// Chart component
class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData1:this.props.chartData1,
      chartData2:this.props.chartData2,
      chartData3:this.props.chartData3,
      chartData4:this.props.chartData4
    }
  }

  getGraph = (chartData1, chartData2, chartData3, chartData4) => {
    this.setState({
      chartData1: chartData1,
      chartData2: chartData2,
      chartData3: chartData3,
      chartData4: chartData4
    })
  }


  render(){
      return(
        <div className="chart">
          <Line
            data={this.props.chartData1}
            options={{
              title:{
                display: true,
                text:"Signal Strength Graph",
                fontSize: 25
              },
              legend:{
                display: true,
                position: 'bottom'
              }

            }}
          />

          <Bar
            data={this.props.chartData2}
            options={{
              title:{
                display: true,
                text:"Usage Graph",
                fontSize: 25
              },
              legend:{
                display: true,
                position: 'bottom'
              }
            }}
          />

          <Line
            data={this.props.chartData3}
            options={{
              title:{
                display: true,
                text:"Altitude",
                fontSize: 25
              },
              legend:{
                display: true,
                position: 'bottom'
              }
            }}
          />


        <Radar
          data={this.props.chartData4}
          options={{
            title:{
              display: true,
              text:"Round Trip Time",
              fontSize: 25
            },
            legend:{
              display: true,
              position: 'bottom'
            }
          }}
        />
      </div>

      )
    }
}
// End Chart component

export default Chart;

// showXLabels: 20,
// responsive: true,
// maintainAspectRatio: false,
// scales: {
//     xAxes: [{
//         ticks: {
//             beginAtZero:true,
//             autoSkip: true
//         }
//     }]
// }
