import {withRouter, history} from 'react-router-dom';
import React from 'react';
const Authenticate = withRouter((props) => (
  <button
    type='button'
    onClick={e => {
      e.preventDefault()
      console.log('i work ', props, '\n history', props.history)
      props.authenticate(props.history) }}
  >authenticate</button>
))
export default Authenticate
