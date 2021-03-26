import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest} render={props =>
        localStorage.getItem("token") ? ( // problem when trying to get token?
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
}