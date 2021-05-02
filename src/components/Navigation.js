import React, {Link,useState,useEffect} from 'react';
import {Nav,Navbar, Container } from "react-bootstrap"
import "./navigation.css"; 
import SideMenu from './sideMenu/SideMenu';


const Navigation = () => {
    const [linkWorkBoolean, setLinkWorkBoolean] = useState()
    const [linkAcademicBoolean, setLinkAcademicBoolean] = useState()
    const [linkAboutBoolean, setLinkAboutkBoolean] = useState()
    const [linkContactBoolean, setLinkContactBoolean] = useState()

    useEffect (()=>{
        console.log(window.location.href.split('/')[3])
        if(window.location.href.split('/')[3]==='work'){
            document.getElementById('work').setAttribute("class","navlinkClicked btn")
        }
        else if(window.location.href.split('/')[3]==='academic'){
            document.getElementById('academic').setAttribute("class","navlinkClicked btn")
        }
        else if(window.location.href.split('/')[3]==='about'){
            document.getElementById('about').setAttribute("class","navlinkClicked btn")
        }
        else if(window.location.href.split('/')[3]==='contact'){
            document.getElementById('contact').setAttribute("class","navlinkClicked btn")
        }

    })
    return (
        <div>
            <div className="container sideMenu">
                <div className="row">
                    <div className=" d-flex justify-content-start">
                        <h4 className="LeeMiteraniNavSideMenu">Lee Miterani</h4>
                        <div className="sideMenu"><SideMenu></SideMenu></div>
                    </div>
                </div>
            </div>


                
        <nav className='navbar m-0 p-0 align-items-center' >
            <div className=" d-flex justify-content-start">
            <a href="/work"><h4 className="LeeMiteraniNav">Lee Miterani</h4></a>
            </div>
                <div className="d-flex justify-content-end ">
                   <a id='work' href='/work' className="navlinks btn " style={{marginRight: '10px '}} >Work</a>
                    <a id='academic' href='/academic' className="navlinks btn " style={{marginRight: '10px '}} >Academic</a>
                    <a id='about' href='/about' className="navlinks btn " style={{marginRight: '10px '}} >About</a>
                    <a id='contact' href='/contact' className="navlinks btn " style={{marginRight: '10px '}}>Contact</a>

                    <button  className="btn btn-primary-outline rounded-pill resumeBtn">Resume</button>
                </div>
                
        </nav>

       
        </div>
    );
};

export default Navigation;