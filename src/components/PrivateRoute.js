import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getAccessTokenFromLocalStorage } from '../api';


// export const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={props => (
//         getAccessTokenFromLocalStorage()
//             ? <Component {...props} />
//             : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
//     )} />
// )

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        getAccessTokenFromLocalStorage()
            ? <Component {...props} />
            
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
)