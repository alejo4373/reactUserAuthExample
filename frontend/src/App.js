import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";

import Profile from './Components/Profile';
import Auth from './Components/Auth';
import PrivateRoute from './Components/Auth/PrivateRoute';
import axios from "axios";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userLoggedIn: false,
      user: {}
    }
  }

  isUserLoggedInTheBackend = () => {
    axios.get('/users/isLoggedIn')
      .then(res => {
        const user = res.data;
        this.setLoggedInUser(user);
      })
      .catch(err => {
        console.log("Error =>", err);
      })
  }

  componentDidMount(){
    //Check if user is logged in in backend
    this.isUserLoggedInTheBackend();
  }

  setLoggedInUser = (user) => {
    this.setState({
      user: user,
      userLoggedIn: true
    })
  }

  renderAuth = (routeProps) => {
    return (
      <Auth 
        setLoggedInUser={this.setLoggedInUser}
        {...routeProps}
      />
    )
  }

  render() {
    const { userLoggedIn } = this.state;
    return (
      <div className="App">
        <nav>
          <Link to='/'>Home</Link>{" "}
          {userLoggedIn
            ? (
                <div>
                  <Link to='/profile'>Profile</Link>{' '}
                  <Link to='/dashboard'>Dashboard</Link>
                </div>
              )
            : null
          }
        </nav>
      <Switch>
        <Route exact path='/' render={this.renderAuth} />
        <PrivateRoute 
          userLoggedIn={userLoggedIn}
          path='/profile' 
          component={Profile} 
        />
      </Switch>
      </div>
    );
  }
}

export default App;
