import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-materialize'
import "./Logout.css"


// import "../Home/Home.css"
import NavBar from "../NavBar"

class Logout extends Component {
    render() {

        return (
            <div>
            {/* <NavBar /> */}
                <div>
                    <h4 className="text">Thanks for Using FlightBuddy! Please Login again to Search Flight Metrics</h4>
                </div>
                {/* <div class="homeBtn">
                    <Button>
                        < Link to="/" className="text-secondary" >
                            <span className="text-secondary">Return Home</span>
                        </Link >
                    </Button>
                </div> */}
                <div>
                    <img className="plane" alt="" src="./images/plane.jpg" />
                </div>
            </div>
        )
    }
}

export default Logout

    