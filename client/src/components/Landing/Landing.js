import React, { Component } from 'react'
import {Row, Col } from 'react-materialize'
import "./Landing.css"


class Landing extends Component {
    render() {

        return (
            <div>
                <Row>
                <Col m={8} offset="m2" className='grid-example'>
                <h4> Welcome to FlightBuddy</h4>
                <h6>Please Sign Up to Search Flight Details</h6>
                {/* <Col  className="aboutImage" offset="l4 m4"> */}
                </Col>
                </Row>
                <Row>
                <Col m={6} offset="m2">
                <img className="aboutFB"  alt="" src="./images/Presentation.jpg"></img>
                {/* </Col> */}
                </Col>
                </Row>
                </div>
            
        )
    }
}

export default Landing


    // < h4 > Welcome to FlightBuddy</h4 >
    //     <h6>Please Sign Up to Search Flight Details</h6>
    //     <Modal
    //         header='Login:'
    //         trigger={<Button waves='light'>Sign Up For Flight Buddy!<Icon right>insert_chart</Icon></Button>}>
    //         <p> This is where we can put a sign-up for for the user to login to view Flight Buddy product. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    //           incididunt ut labore et dolore magna aliqua.</p>
    //     </Modal>