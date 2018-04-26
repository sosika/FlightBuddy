// import React, { Component } from 'react';
import React from 'react'
import { Button, Icon, Modal } from 'react-materialize'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';

// import Login from "./pages/LandingPage";
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           Welcome to the Flight Buddy tool!!
//         </p>
//       </div>
//     );
//   }
// }
const App = () => (
  <div>
  <div className="content">
  <Router>
    <div>
      <Nav />
      <Switch>
        {/* <Route exact path="/" component={LandingPage} /> */}
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

  <div className="footer">
  <Footer />
  </div>
  </div>
);
export default App;
