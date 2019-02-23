import React from 'react'
import axios from 'axios';

import Login from './Auth/Login';
import Signup from './Auth/Signup';

 
// Make POST req to backend to signup
// When? -> User fills out the form & click signup button 
// Check if they typed username and password  

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // formToDisplay: "Signup", // "Signup" || "Login"
      loginDisplay: false,
      username: '',
      password: '',
    }
  }

  loginUser = () => {
    const { username, password } = this.state;
    axios.post('/users/login', {username, password})
      .then(res => {
        const user = res.data;
        this.props.setLoggedInUser(user);
      })
      .catch(err => {
        console.log("Error:", err);
      })
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.loginUser();
  }

  handleSignup = (e) => {
    const { username, password } = this.state;
    e.preventDefault();
    // Make NET request
    axios.post('/users/new', {username, password})
      .then(res => {
        this.loginUser();
      })
      .catch(err => {
        console.log("Error:", err);
      })
  }

  toggleForm = () => {
    this.setState((prevState) => {
      return {
        loginDisplay: !prevState.loginDisplay
      }
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <h2>Welcome</h2>
        {this.state.loginDisplay 
          ? <Login 
              username={username}
              password={password}
              toggleForm={this.toggleForm}
              handleChange={this.handleChange}
              handleLogin={this.handleLogin}
            />
          : <Signup 
              username={username}
              password={password}
              handleSignup={this.handleSignup}
              toggleForm={this.toggleForm}
              handleChange={this.handleChange}
           />
        }
      </div>
    )
  }
}
export default Auth;
