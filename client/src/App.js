// import React, { Component } from 'react';
import React, { Component } from 'react'
import './App.css';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';

// import Login from "./pages/LandingPage";

class App extends Component {

  componentWillMount = () => {
    fetch("/api/planes/3").then((data) => {
      console.log("data", data)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Welcome to the Flight Buddy tool!!
        </p>
      </div>
    );
  }
}
// const App = () => (
//   <div>
//   <div className="content">
//   <Router>
//     <div>
//       <Nav />
//       <Switch>
//
//         {/* <Route exact path="/" component={LandingPage} /> */}
//         {/* <Route exact path="/charts" component={Charts} />
//         <Route exact path="/charts/:id" component={Specific-Flight-Detail} />
//         <Route component={NoMatch} /> */}
//       </Switch>
//     </div>
//   </Router>
//   </div>
//
//   <div className="footer">
//   <Footer />
//   </div>
//   </div>
// );
export default App;
