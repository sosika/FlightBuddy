import React from 'react';
import moment from 'moment';
import 'moment-precise-range-plugin';
import { Col } from 'react-materialize'

import "./Summary.css"

const Summary = ({ devices, totalUsage, avgDrc, avgRtt, startTime, endTime }) => {
  var m1 = moment(startTime,'YYYY-MM-DD HH:mm:ss');
  var m2 = moment(endTime,'YYYY-MM-DD HH:mm:ss');
  var diff = moment.preciseDiff(m1, m2);
  
  return (
    <row className="parent">
      <Col>
    <ul className="summary">Flight Metrics Summary: 
    <br />
    <br />
      <li className="item">Flight start time: {moment(startTime).format("dddd, MMMM Do YYYY") + " " + startTime.substring(11,startTime.length)}</li>
      <li className="item">Flight end time: {moment(endTime).format("dddd, MMMM Do YYYY") + " " + endTime.substring(11,endTime.length)}</li>
      <li className="item">Duration: {diff}</li>
      <li className="item">Number of Devices: {devices}</li>
      <li className="item">Total Usage: {totalUsage}MB</li>
      <li className="item">Average DRC: {avgDrc.toFixed(2)}kbps</li>
      <li className="item">Average ping time: {avgRtt.toFixed(2)}ms</li>
    </ul>
    </Col>
    </row>
  )
}

export default Summary;
