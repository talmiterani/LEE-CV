import React from "react"
import { Route, Redirect } from "react-router-dom"

export default function PrivateRoute({ component: Component, ...rest }) {
  
  return (
    
    <Route
      {...rest}
      
      render={props => {  {console.log(props)}
      {localStorage.getItem('token') ?console.log(): localStorage.setItem("project",props.location.pathname)} 
        return localStorage.getItem('token') ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}