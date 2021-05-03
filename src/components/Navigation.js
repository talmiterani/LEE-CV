import React, {useEffect} from 'react';
import "./navigation.css"; 
import SideMenu from './sideMenu/SideMenu';

const Navigation = () => {
    useEffect (()=>{
        console.log((window.location.href.split('/')[3]))
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
            <div className=" sideMenu d-flex row">
                    <div className="col-9">
                        <h4 className="LeeMiteraniNavSideMenu">Lee Miterani</h4>
                    </div>
                    <div className="col-2">
                        <div className="sideMenu"><SideMenu></SideMenu></div>
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
                    <a href="/LeeMiteraniResume.pdf" download className="btn btn-primary-outline rounded-pill resumeBtn">Resume</a>
                </div>
                
        </nav>

       
        </div>
    );
};

export default Navigation;