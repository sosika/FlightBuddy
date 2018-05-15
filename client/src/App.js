import { Button, Icon, Modal } from 'react-materialize'
import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Tail from "./containers/tail";
// import TailView from "./components/TailView/tailview";
import About from "./components/About"
// import Chart from "./components/Chart"
import SignUp from "./components/SignUp"
import LoginForm from './components/Login'
import Navbar from './components/NavBar'
import Home from './components/Home'
import Landing from './components/Landing'
import Logout from "./components/Logout"

class App extends Component {

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
    return (
      <div className="">
        {/* <div className="content"> */}
          <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          {/* {this.state.loggedIn &&
            <p className="welcomeUser"> Welcome back: {this.state.username}!</p>
          }  */}
          <Route exact path="/loggedOut" component={Logout} />
          <Route exact path="/flights" component={Tail} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/loggedOut" component={Logout} /> */}
          
          <Route
            exact path="/"
            component={Landing} />
          <Route
            exact path="/home"
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
        {/* </div> */}
        {/* closes background image above */}
        {/* </div> */}
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

