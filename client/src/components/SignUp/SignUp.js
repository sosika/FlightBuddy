// import React from "react";
// import axios from "axios";

// import "./SignUp.css"

// class SignUp extends React.Component {
//     // form action should go to search a flight page

//     state = {
//         username: "",
//         password: "",
//         confirmPassword: ""
//     }

//     handleChange = event => {
//         // const { value } = event.target;        
//         this.setState({
//             [event.target.name]: event.target.value
//             // password: value
//         });
//     };
//     //check syntax for handleChange for updating state for username and password

//     handleSubmit = event => {
//         event.preventDefault();
//         console.log("sign-up-form, username: ")
//         console.log(this.state.username)
//         // console.log(this.state.password)
//         //request to server here
//         axios.post("/user/", {
//             username: this.state.username,
//             password: this.state.password
//         })
//         .then(response => {
//             console.log("this is the axios response", response)
//             if(response.data){
//                 console.log("signup is successful!!!")
//                 this.setState({
//                     redirectTo: '/about'
//                 })
//             } else {
//                 console.log("Error: Sign-up failed");
//             }
//         }).catch(err => {
//             console.log('Sign up server error: ')
//             console.log(err);
//         })
//     };
import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import "./SignUp.css"

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            confirmPassword: ''

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        console.log('sign-up handleSubmit, username: ')
        console.log(this.state.username)
        event.preventDefault()

        //request to server to add a new username/password
        axios.post('/user/', {
            username: this.state.username,
            password: this.state.password
        })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log('successful signup')
                    this.setState({ //redirect to login page
                        Redirect: '/about'
                    })
                } else {
                    console.log('username already taken')
                }
            }).catch(error => {
                console.log('signup error: ')
                console.log(error)

            })
    }

    render(){
    return(
    <form>
        <div className="form-group">
            <label htmlFor="SignIn">
                <strong>Create An Account:</strong>
            </label>
            <label htmlFor="username">
                <strong>Username: </strong>
            </label>
            <input
                className="form-control"
                id="username"
                type="text"
                placeholder="Type a username:"
                value={this.state.username}
                name="username"
                onChange={this.handleChange}
                required
            />
            <label htmlFor="password">
                <strong>Password: </strong>
            </label>
            <input
                className="form-control"
                id="password"
                type="text"
                placeholder="Type a password:"
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
                required
            />
            <div className="pull-right">
                <button
                    className="btn btn-lg btn-danger"
                    onClick={this.handleSubmit}
                    type="submit"
                // redirectTo={view}
                >
                    Sign-In
                </button>
            </div>
        </div>
    </form>
    )};
};

export default Signup;