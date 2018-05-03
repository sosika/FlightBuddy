import { Icon, Modal } from 'react-materialize'
import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Tail from "./containers/tail";
import TailView from "./components/TailView/tailview";
// import Authenticate from './button';
import About from "./components/About"
import Chart from "./components/Chart"
import SignUp from "./components/SignUp"
import LoginForm from './components/Login'
import Navbar from './components/NavBar'
import Home from './components/Home'


class App extends Component {
  // state = {
  //   // authenticated: false,
  //   selectedFlight: {}
  // }
// Do we need this here?
  // componentWilllMount() {
  //   fetch("/api/planes/15121").then((data) => {
  //     console.log("data", data)
  //   })
  // }
  // authenticate = (history) => {
  //   console.log("inside authentication method in App.js", this)
  //   //this.setState({authenticated: true})
  //   //return history.push('/tail')
  // }
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }


  render() {
    // let app;
    // if(this.state.authenticated) {
    //   app = (
    //     <div>
    //       <Router>
    //         <Switch>
    //           <Route exact path="/flights" component={Tail} />
    //           <Route exact path="/view" component={TailView} />
    //           <Route exact path="/about" component={About} />
    //           <Route exact path="/flight" component={Chart} />
    //           <div>
    //             {/* <h4>Welcome to FlightBuddy!</h4>
    //             <h6>Please Sign Up to Search Flight Details</h6>
    //           <SignUp /> */}
    //           </div>
    //         </Switch>
    //       </Router>
    //     </div>
    //   )
    // }
    // else {
    //   app = (
    //     <div>
    //     <Router>
    //     <Switch>
    //       {/* <Nav /> */}
    //           <Route exact path="/tail" component={Tail} />
    //           <Route exact path="/view" component={TailView} />
    //           <Route exact path="/about" component={About} />
    //           {/* <Route exact path="/chart" component={Chart} /> */}
              
    //     <div>
    //       <h4>Welcome to FlightBuddy</h4>
    //       <h6>Please Sign Up to Search Flight Details</h6>
    //       <SignUp />
    //       {/* <Modal
    //         header='Login:'
    //         trigger={<Button waves='light'>Sign Up For Flight Buddy!<Icon right>insert_chart</Icon></Button>}>
    //         <p> This is where we can put a sign-up for for the user to login to view Flight Buddy product. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    //         incididunt ut labore et dolore magna aliqua.</p>
    //         <Authenticate authenticate={this.authenticate()}/>
    //       </Modal> */}
    //       </div>
    //         </Switch> 
    //       </Router>
    //     </div>
    //   )
    // }

    return (
      <div className="app">
      {/* please keep the content/footer divs as such--they serve a purpose in App.css! */}
        <div className="content">
        {/* <Router>
        <Switch> */}
          <Nav />
          <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          greet user if logged in:
          {this.state.loggedIn &&
            <p>Join the party, {this.state.username}!</p>
          }
          {/* {app} */}
          {/* Routes to different components */}
          <Route exact path="/tail" component={Tail} />
          <Route exact path="/view" component={TailView} />
          <Route exact path="/about" component={About} />
          <Route exact path="/chart" component={Chart} />
          <Route
            exact path="/"
            component={Home} />
          <Route
            path="/login"
            render={() =>
              <LoginForm
                updateUser={this.updateUser}
              />}
          />
          <Route
            path="/signup"
            render={() =>
              <SignUp
                signup={this.signup}
              />}
          />
        {/* </Switch>
        </Router> */}
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
