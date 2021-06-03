import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'

export default function Private({ component: Component, ...rest}) {
    const { currentUser } = useAuth();

    // This will be used for retrieving specific data.
    // will most likely implement when research about database is done.
    // console.log(currentUser.email);
    
    return (
        <Route
          {...rest}
          render ={props => {
            return currentUser ? <Component {...props} /> : <Redirect to="/login" />
          }}
        >
            
        </Route>
    )
}
