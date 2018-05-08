import React, { Component } from 'react'
import "./Home.css"

class Home extends Component {
    render() {
        // const imageStyle = {
        //     height: 100,
        //     width: 100
        // }
        return (
            <div>
            <div>
                <h4 className="text">Welcome to the Flight Buddy Homepage</h4>
            </div>
            <div>
                <img className="plane" alt="" src="./images/plane.jpg" />
            </div>
            </div>
        )
    }
}

export default Home
