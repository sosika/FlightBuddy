import React from "react";
import { Line } from "react-chartjs-2"
// import { Link } from "react-router-dom";

let data = {
    labels: ["time"],
    datasets: [{
        label: 'Default Graph ',
        data: [12, 19, 3, 5, 2, 3],
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
    }]
}

class Chart extends React.Component {

    state = {
        // sinr: "",
        // time: ""
    }
    componentDidMount() {
        //add our own data to key value pairs, this is dummy code. 
        this.setState({
            labels: ["time"],
            datasets: [{
                label: 'AAAView Graph',
                data: this.props.stuff,
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
            }]
        })
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="">
                        <Line data={data} width="500" height="200" />
                    </div>
                </nav>
            </div>
        )
    }
};


export default Chart;
