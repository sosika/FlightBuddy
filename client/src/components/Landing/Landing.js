import React, { Component } from 'react'
import { Button, Icon, Modal } from 'react-materialize'


class Landing extends Component {
    render() {
        const imageStyle = {
            height: 325,
            width: 375,
            zIndex: 10,
            marginLeft: 275
        }
        return (
            <div>
                <h4> Welcome to FlightBuddy</h4>
                <h6>Please Sign Up to Search Flight Details</h6>
                <img className="aboutFB" style={imageStyle} alt="" src="./images/Presentation.jpg"></img>
                
                {/* <p>this should only show on the landing page, or the home/logged out/initial</p> */}
                {/* <Modal
                    header='Login:'
                    trigger={<Button waves='light'>Sign Up For Flight Buddy!<Icon right>insert_chart</Icon></Button>}>
                    <p> This is where we can put a sign-up for for the user to login to view Flight Buddy product. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.</p>
                </Modal> */}
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