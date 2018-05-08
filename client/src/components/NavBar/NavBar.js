import React, { Component } from 'react'
import {Icon, Modal } from 'react-materialize'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import { NavItem } from 'react-materialize'
import "./Navbar.css"
// import logo from "./images/logo.png"
// import '../App.css';
import axios from 'axios'

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
        this.state = {
            redirectTo: null
        }
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
                this.setState({
                    redirectTo: '/loggedOut'
                })
            }
        }).catch(error => {
            console.log('Logout error')
        })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        const logout = this.logout.bind(this);
        const imageStyle = {
            height: 90,
            width: 250,
            marginTop: -15
            
            
        }
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
        // const loggedIn = this.props.loggedIn;
        
        // console.log('navbar render, props: ')
        // console.log(this.props);

        
        return (
            <div className="navigation">
                <nav className="">
                <div className="nav-wrapper blue-grey" id="">
                 <img href="#" className="brand-logo right" style={imageStyle} alt="" src="./images/logo1.png"></img>
                    <div className="" >
                    {/* in the loggedIn section you can put the search and charts links to those components */}
                        {loggedIn ? (
                                <ul className="">
                                    <li className="navbar-section">
                                        <Link to="/" className="text-secondary">
                                            <span className="text-secondary">Home</span>
                                            {/* <Icon>Home</Icon> */}
                                        </Link>
                                    </li>
                                    <li className="navbar-section">
                                        <Link to="/flights" className="text-secondary">
                                            <span className="text-secondary">Search</span>
                                        </Link>
                                    </li>
                                    <li className="navbar-section">
                                        <Link to="/about" className="">
                                            <span className="text-secondary">About</span>
                                        </Link>
                                    </li>
                                    <li className="navbar-section">
                                        <Link to="#" className="btn btn-link text-secondary grey" onClick={this.logout}>
                                            <span className="text-secondary">Logout</span></Link>
                                    </li>
                                </ul>
                            
                        ) : (
                            <ul className="">
                                <li className="navbar-section">
                                    <Link to="/" className="text-secondary">
                                        <span className="text-secondary">Home</span>
                                    </Link>
                                </li>
                                <li className="navbar-section">
                                    <Link to="/login" className="text-secondary">
                                        <span className="text-secondary">Login</span>
                                    </Link>
                                </li>
                                <li className="navbar-section">
                                    <Link to="/signup" className="">
                                        <span className="text-secondary">Sign-Up</span>
                                    </Link>
                                </li>
                                <li className="navbar-section">
                                    <Link to="/about" className="">
                                        <span className="text-secondary">About</span>
                                    </Link>
                                </li>
                            </ul>
                            )}
                    </div>
                    <div className="col-4 col-mr-auto">
                        <div id="top-filler"></div>
                        {/* <img src={logo} className="App-logo" alt="logo" /> */}
                        <h2 className="App-title"></h2>
                        <div>
                            {/* <h4>FlightBuddy</h4> */}
                                {loggedIn ? (
                                    
                                <p></p>
                                ): (
                                <p></p>
                                
                                )}       
                        
                                {/* {logout ? (
                                <p>appears if NOT logged in</p>
                                
                                ): (
                                <p>logged in</p>
                                ) */}
                            {/* } */}
                                

                        </div>
                    </div>
                </div>
                </nav>
            </div>
        );

    }
}
}

export default Navbar