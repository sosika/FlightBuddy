import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import { NavItem } from 'react-materialize'
import "./Navbar.css"
// import '../App.css';
import axios from 'axios'

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
            }
        }).catch(error => {
            console.log('Logout error')
        })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        // const loggedIn = this.props.loggedIn;
        
        // console.log('navbar render, props: ')
        // console.log(this.props);
        
        return (
            <div className="navigation">
                <nav className="">
                <div className="nav-wrapper grey" id="">
                 <a href="" className="brand-logo right">Flight Buddy Logo</a>
                    <div className="" >
                    {/* in the loggedIn section you can put the search and charts links to those components */}
                        {loggedIn ? (
                                <ul className="">
                                    <li className="navbar-section">
                                        <Link to="/" className="text-secondary">
                                            <span className="text-secondary">home</span>
                                        </Link>
                                    </li>
                                    {/* <li className="navbar-section">
                                        <Link to="/login" className="text-secondary">
                                            <span className="text-secondary">login</span>
                                        </Link>
                                    </li>
                                    <li className="navbar-section">
                                        <Link to="/signup" className="">
                                            <span className="text-secondary">sign up</span>
                                        </Link>
                                    </li> */}
                                    <li className="navbar-section">
                                        <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                            <span className="text-secondary">Logout</span></Link>
                                    </li>
                                </ul>
                            
                        ) : (
                            <ul className="">
                                <li className="navbar-section">
                                    <Link to="/" className="text-secondary">
                                        <span className="text-secondary">home</span>
                                    </Link>
                                </li>
                                <li className="navbar-section">
                                    <Link to="/login" className="text-secondary">
                                        <span className="text-secondary">login</span>
                                    </Link>
                                </li>
                                <li className="navbar-section">
                                    <Link to="/signup" className="">
                                        <span className="text-secondary">sign up</span>
                                    </Link>
                                </li>
                            </ul>
                            )}
                    </div>
                    <div className="col-4 col-mr-auto">
                        <div id="top-filler"></div>
                        {/* <img src={logo} className="App-logo" alt="logo" /> */}
                        <h1 className="App-title"></h1>
                        <div>

                        </div>
                    </div>
                </div>
                </nav>
            </div>
        );

    }
}

export default Navbar