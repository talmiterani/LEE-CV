import React, { useState, useEffect } from "react"
import "./drawerStyle.css";


export default function SideDrawer(props) {
 
  const [currentUser, setCurrentUser] = useState();

  let drawerClasses = ["side-drawer"];
  let callRef = React.createRef();

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }

  useEffect(() => {
      if(! localStorage.getItem("username"))
        setCurrentUser("visitor")
      else
      setCurrentUser( localStorage.getItem("username").slice(1, localStorage.getItem("username").length-1))

  }, [])

    function logout() {
      localStorage.removeItem('username');
      localStorage.removeItem('token');
      localStorage.removeItem('usernameID');
      setCurrentUser("visitor")
    }
    function userOptionsShow(){
      if(currentUser !== 'visitor')
        return (<li><a href="/" onClick={() => {logout() }}>Logout</a></li>)
      else
        return (<li><a href="/login">Login</a> <a style={{marginLeft:"60%"}} href="/register">Register</a> </li>)
    }  
    
  return (
    <nav className={drawerClasses.join(" ")}>

      <ul className="sideBarMenu"> 
          
          {/* <li>
            <h3>Welcome&nbsp; {currentUser}</h3>
          </li>
          
            {userOptionsShow()} */}
          
          <li>
            <a href="/">Home</a>       
          </li>
          <li>
            <a href="/">Home</a>       
          </li>
          <li>
            <a href="/">Home</a>       
          </li>
          <li>
            <a href="/">Home</a>       
          </li>
      </ul>
    </nav>
  );
};

