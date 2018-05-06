import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import "./SignUp.css"

class SignupForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            redirectTo: null
            

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
        event.preventDefault()
        console.log('sign-up-form, username: ');
        console.log(this.state.username);
        console.log(this.state.password);
        //request to server here
        axios.post('/user/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
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
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
    return(
        <div>
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
                type="password"
                name="password"
                placeholder="Type a password:"
                value={this.state.password}
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
                    Sign-Up
                </button>
            </div>
        </div>
    </form>
    </div>
        
    )};
}
};

export default SignupForm;
