import React from 'react';

const Summary = ({ devices, totalUsage }) => {
  return (
    <ul>
      <li>Number of Devices: {devices}</li>
      <li>Total Usage: {totalUsage}</li>
      <li>Average DRC:</li>
      <li>Average ping time:</li>
    </ul>
  )
}

export default Summary;
