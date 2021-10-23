import React, { useEffect } from "react";
import "./navigation.css";
import SideMenu from "./sideMenu/SideMenu";
import { Link } from "react-router-dom";

const Navigation = () => {
  var changeColor = (event) => {
    document.getElementById("work").setAttribute("class", "navlinks btn");
    document.getElementById("academic").setAttribute("class", "navlinks btn");
    document.getElementById("about").setAttribute("class", "navlinks btn");
    document.getElementById("contact").setAttribute("class", "navlinks btn");

    if (event.target.id === "work") {
      document
        .getElementById("work")
        .setAttribute("class", "navlinkClicked btn");
    } else if (event.target.id === "academic") {
      document
        .getElementById("academic")
        .setAttribute("class", "navlinkClicked btn");
    } else if (event.target.id === "about") {
      document
        .getElementById("about")
        .setAttribute("class", "navlinkClicked btn");
    } else if (event.target.id === "contact") {
      document
        .getElementById("contact")
        .setAttribute("class", "navlinkClicked btn");
    }
  };
  return (
    <div className="container-fluid paddingSidesMobile">
      <div className=" sideMenu d-flex row align-items-center ">
        <div className="col-11">
          <h4 className="LeeMiteraniNavSideMenu">Lee Miterani</h4>
        </div>
        <div>
          <div className="sideMenu">
            <SideMenu></SideMenu>
          </div>
        </div>
      </div>
      <div
        className="row justify-content-between mt-4"
        style={{ marginLeft: "80px", marginRight: "80px" }}
      >
        <div>
          <Link to="/work">
            <h4 className="LeeMiteraniNav">Lee Miterani</h4>
          </Link>
        </div>
        <div>
          <Link to="/work">
            <span
              id="work"
              className="navlinks btn "
              style={{ marginRight: "10px " }}
              onClick={(event) => {
                changeColor(event);
              }}
            >
              Work
            </span>
          </Link>
          <Link to="/academic">
            <span
              id="academic"
              href="/academic"
              className="navlinks btn "
              style={{ marginRight: "10px " }}
              onClick={(event) => {
                changeColor(event);
              }}
            >
              Academic
            </span>
          </Link>
          <Link to="/about">
            <span
              id="about"
              href="/about"
              className="navlinks btn"
              style={{ marginRight: "10px " }}
              onClick={(event) => {
                changeColor(event);
              }}
            >
              About
            </span>
          </Link>
          <Link to="/contact">
            <span
              id="contact"
              href="/contact"
              className="navlinks btn"
              style={{ marginRight: "10px " }}
              onClick={(event) => {
                changeColor(event);
              }}
            >
              Contact
            </span>
          </Link>
          <a
            href="/LeeMiteraniResume.pdf"
            download
            className="btn btn-primary-outline rounded-pill resumeBtn"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
