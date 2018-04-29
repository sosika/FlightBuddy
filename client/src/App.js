import { Button, Icon, Modal } from 'react-materialize'
import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Tail from "./containers/tail";


class App extends Component {

  // componentWillMount() {
  //   fetch("/api/planes/15121").then((data) => {
  //     console.log("data", data)
  //   })
  // }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/tail" component={Tail} />
              {/* <Route exact path="/charts" component={Charts} />
              <Route exact path="/charts/:id" component={Specific-Flight-Detail} />
            <Route component={NoMatch} /> */}
            </Switch>
            <h4>Welcome to FlightBuddy</h4>
                <Modal
                  header='Login:'
                  trigger={<Button waves='light'>Sign Up For Flight Buddy!<Icon right>insert_chart</Icon></Button>}>
                  <p> This is where we can put a sign-up for for the user to login to view Flight Buddy product. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.</p>
                </Modal>
          </div>
  </Router>
      </div>
    );
  }
}

export default App;
