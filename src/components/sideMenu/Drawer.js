import React, {  useEffect } from "react"
import "./drawerStyle.css";


export default function SideDrawer(props) {
  useEffect (()=>{
    if(window.location.href.split('/')[3]==='work'){
        document.getElementById('workD').setAttribute("style", "color:#0075ff; padding:0")
    }
    else if(window.location.href.split('/')[3]==='academic'){
        document.getElementById('academicD').setAttribute("style", "color:#0075ff; padding:0")
    }
    else if(window.location.href.split('/')[3]==='about'){
        document.getElementById('aboutD').setAttribute("style", "color:#0075ff; padding:0")
    }
    else if(window.location.href.split('/')[3]==='contact'){
        document.getElementById('contactD').setAttribute("style", "color:#0075ff; padding:0")
    }

})

  let drawerClasses = ["side-drawer"];

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }


  return (
    <nav className={drawerClasses.join(" ")}>

      <ul className="sideBarMenu"> 
          <li>
            <a id='workD' href="/work">Work</a>       
          </li>
          <li>
            <a id='academicD' href="/academic">Academic</a>       
          </li>
          <li>
            <a id='aboutD' href="/about">About</a>       
          </li>
          <li>
            <a  id='contactD' href="/contact">Contact</a>       
          </li>
          <li>
            <a href="/LeeMiteraniResume.pdf" download>Resume</a>       
          </li>
      </ul>
    </nav>
  );
};

