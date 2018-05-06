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
                <img className="plane" alt="" src="./images/plane.jpg" />
            </div>
            <div>
                {/* <p className="text">Welcome to the Flight Buddy Homepage</p> */}
            </div>
            </div>
        )
    }
}

export default Home
