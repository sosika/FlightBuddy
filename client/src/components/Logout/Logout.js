import React, { Component } from 'react'
import "../Home/Home.css"
import Header from "../NavBar"
class Logout extends Component {
    render() {
        // const imageStyle = {
        //     height: 100,
        //     width: 100
        // }
        return (
            <div>
            {/* <Header /> */}
                <div>
                    <h4 className="text">Thanks for Using FlightBuddy! Please Login again to Search Flight Metrics</h4>
                </div>
                {/* <div className="spaceFix">
                </div> */}
                <div>
                    <img className="plane" alt="" src="./images/plane.jpg" />
                </div>
            </div>
        )
    }
}

export default Logout
