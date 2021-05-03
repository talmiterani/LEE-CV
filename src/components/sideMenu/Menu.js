import React from "react";
import "./menuStyle.css";

const menuToggleButton = props => (
  <div className='toggle-button-row'>
  <button className="toggle-button " onClick={props.click}>
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
  </button>
  </div>
);

export default menuToggleButton;
