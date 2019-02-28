import React from 'react'
import axios from 'axios';
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";

import Login from './Auth/Login';
import Signup from './Auth/Signup';

 
// Make POST req to backend to signup
// When? -> User fills out the form & click signup button 
// Check if they typed username and password  
class AuthContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginDisplay: false,
      username: '',
      password: '',
    }
  }


  handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.loginUser({
      username,
      password,
    });
  }

  handleSignup = (e) => {
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
    console.log('AutoContainer props =>', this.props);
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

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (userCredentials) => dispatch(
      loginUser(userCredentials)
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
