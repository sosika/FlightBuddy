import { Button, Icon, Modal } from 'react-materialize'
import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Tail from "./containers/tail";
import TailView from "./components/TailView/tailview";
import Authenticate from './button';
import About from "./components/About"
import Chart from "./components/Chart"


class App extends Component {

  state = {
    authenticated: true,
    selectedFlight: {}
  }
// Do we need this here?
  // componentWilllMount() {
  //   fetch("/api/planes/15121").then((data) => {
  //     console.log("data", data)
  //   })
  // }
  authenticate = (history) => {
    console.log("inside authentication method in App.js", this)
    //this.setState({authenticated: true})
    //return history.push('/tail')
  }

  render() {
    let app;
    if(this.state.authenticated) {
      app = (
        <div>
          <Router>
            <Switch>
              <Route exact path="/flights" component={Tail} />
              <Route exact path="/view" component={TailView} />
              <Route exact path="/about" component={About} />
              <Route exact path="/flight" component={Chart} />
            </Switch>
          </Router>
        </div>
      )
    }
    else {
      app = (
        <div>
        <Router>
        <Switch>
          {/* <Nav /> */}
              <Route exact path="/tail" component={Tail} />
              <Route exact path="/view" component={TailView} />
              <Route exact path="/about" component={About} />
              {/* <Route exact path="/chart" component={Chart} /> */}
              
        <div>
          <h4>Welcome to FlightBuddy</h4>œ

          <Modal
            header='Login:'
            trigger={<Button waves='light'>Sign Up For Flight Buddy!<Icon right>insert_chart</Icon></Button>}>
            <p> This is where we can put a sign-up for for the user to login to view Flight Buddy product. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.</p>
            <Authenticate authenticate={this.authenticate()}/>
          </Modal>
          </div>
            </Switch> 
          </Router>
        </div>
      )
    }

    return (
      <div className="app">
      {/* please keep the content/footer divs as such--they serve a purpose in App.css! */}
        <div className="content">
          <Nav />
          {app}
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
/* <Route exact path="/charts" component={Charts} />
<Route exact path="/charts/:id" component={Specific-Flight-Detail} />
<Route component={NoMatch} /> */
