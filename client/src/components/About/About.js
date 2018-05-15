import React from "react";
import { Row, Col } from 'react-materialize'

import "./About.css"
// import { Col, Row, Icon } from 'react-materialize'


class About extends React.Component {
    render() {
        const imageStyle = {
            height: 200,
            width: 300,
            "marginLeft": 400,
            "marginBottom": 20
            
            
        }
        const imageTwo = {
            height: 225,
            width: 200,
            "marginLeft": 450,
            "marginBottom": 10


        }
        const profiles = {
        // width: 400,
        // "marginLeft": 275,
        // "marginTop": 30
        }

    return(
    <div>
        <Row>
        <Col l={8} m={8} offset="m2">
        <h5>About the Devs</h5>
        <div className="profiles" style={profiles}>
                <p>Saijai has been working in Network Operations for more than 10 years. She has been instrumental in automation and the creation of tools for proactive monitoring and reporting. With zero tolerance toward manual work, her passion in web development has come from the fact that there is no tool that can enable teams to be proactive and take the guesswork out of the equation. Her main goal is to be able to answer questions before a customer is even aware of them, and drive towards operational excellence. Saijai received her Master of Science in Interdisciplinary Telecommunications from the University of Colorado at Boulder. She enjoys 300 days of sunshine with her family in Boulder, Colorado.</p>
            <img style={imageStyle} className="" alt="" src="./images/Saijai.jpg" />
        {/* </div>  */}
        {/* <div className="profiles" style={profiles}> */}
                <p>Maria has a varied background working in international business. She thrives in challenging and diverse settings having achieved goals working with clients from Fortune Global 500 through to NGO's and entrepreneurs. She has worked with multicultural teams on five continents, studied in eight countries, and has traveled extensively on six continents. Her interest in technology & web-development sparked while working on a geospatial project tracking orangutans in Borneo. She is eager to grow her coding skills and contribute to innovative projects. Her passions include sustainability, foreign languages, technology, travel, and connecting people. She holds a Master of International Business and a Master in Environmental Management. You can find her enjoying various outdoor pursuits in the mountains. She loves being based in Golden, CO. </p>
        <img style={imageTwo} className="" alt="" src="./images/mug.jpg" />
        </div> 
        </Col>
        </Row>  
    </div>
    )}
}

export default About;