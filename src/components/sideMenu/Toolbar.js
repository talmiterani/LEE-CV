import React from "react";
import SideMenu from "./Menu";
import "./Toolbar.css";

const Toolbar = props => (
   <div className="toggle-btn"style={{marginRight:'20px',width:'10px'}}>

         <SideMenu click={props.drawerToggleClickHandler} />
  </div>
);

export default Toolbar;
