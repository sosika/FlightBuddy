import React from 'react';
import moment from 'moment';
import 'moment-precise-range-plugin';
import "./Summary.css"

const Summary = ({ devices, totalUsage, avgDrc, avgRtt, startTime, endTime }) => {
  var m1 = moment(startTime,'YYYY-MM-DD HH:mm:ss');
  var m2 = moment(endTime,'YYYY-MM-DD HH:mm:ss');
  var diff = moment.preciseDiff(m1, m2);
  
  return (
    <ul className="summary">
      <li>Flight start time: {moment(startTime).format("dddd, MMMM Do YYYY") + " " + startTime.substring(11,startTime.length)}</li>
      <li>Flight end time: {moment(endTime).format("dddd, MMMM Do YYYY") + " " + endTime.substring(11,endTime.length)}</li>
      <li>Duration: {diff}</li>
      <li>Number of Devices: {devices}</li>
      <li>Total Usage: {totalUsage}MB</li>
      <li>Average DRC: {avgDrc.toFixed(2)}kbps</li>
      <li>Average ping time: {avgRtt.toFixed(2)}ms</li>
    </ul>
  )
}

export default Summary;
