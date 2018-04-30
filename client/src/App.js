import { Button, Icon, Modal } from 'react-materialize'
import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Tail from "./containers/tail";
import TailView from "./components/TailView/tailview";
import Authenticate from './button';


class App extends Component {

  state = {
    authenticated: true
  }
// Do we need this here?
  // componentWilllMount() {
  //   fetch("/api/planes/15121").then((data) => {
  //     console.log("data", data)
  //   })
  // }
  authenticate = (history) => {
    console.log(this)
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
              <Route exact path="/tail" component={Tail} />
              <Route exact path="/view" component={TailView} />
            </Switch>
          </Router>
        </div>
      )
    }
    else {
      app = (
        <div>
        <Router>
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
          </Router>
        </div>
      )
    }

    return (
      <div className="App">
        <Nav />
        {app}
        <Footer />
      </div>
    );
  }
}

export default App;
/* <Route exact path="/charts" component={Charts} />
<Route exact path="/charts/:id" component={Specific-Flight-Detail} />
<Route component={NoMatch} /> */
