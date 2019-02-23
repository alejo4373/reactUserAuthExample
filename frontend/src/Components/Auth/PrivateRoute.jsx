import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({path, component, userLoggedIn}) => {
 if (userLoggedIn) {
    return (
      <Route path={path} component={component} />
    )
  } else {
    return <Redirect to='/' />
  }
}

export default PrivateRoute
