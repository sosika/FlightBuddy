import React, {Component} from "react";
import { Line, Bar } from "react-chartjs-2";

// Chart component
class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData1:this.props.chartData1,
      chartData2:this.props.chartData2
    }
  }

  getGraph = (chartData1, chartData2) => {
    this.setState({
      chartData1: chartData1,
      chartData2: chartData2
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
              },
                showXLabels: 20,
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            autoSkip: true
                        }
                    }]
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
        </div>

      )
    }
}
// End Chart component

export default Chart;
