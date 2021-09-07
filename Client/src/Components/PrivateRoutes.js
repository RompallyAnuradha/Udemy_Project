import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoutes({ component: Component, auth, ...rest }) {
    const { isAuthenticated } = useSelector((state) => state.CoursesReducer)
    return <Route
        {...rest}
        render={(props) => isAuthenticated ?
            <Component {...props} />
            : (<Redirect to={{ pathname: '/SignIn' , state :{from :props.location} }} />
            )
        }
    />
}