import React from 'react';
import "./footer.css"; 
const Footer = () => {
    return (
        <footer>
            <div>
                <div className="row" > 
                    <h4 className="LeeMiteraniFooter col-md-2 ">Lee Miterani</h4>
                    <div className="col-md-2 p-0">
                        <p className="contactFooterContact">Contact</p>
                        <span className="box-e">
                            <a href="mailto:lee.gouetta@gmail.com " className="contactEmailFooter custom-underline pointer" >Lee.gouetta@gmail.com</a>
                           
                        </span>
                        <p></p>
                        <p className="contactEmailFooter ">+972 505893277</p>
                    </div>
                    
                    <div className="col-md-6 " style={{marginTop:'69px',padding:'0'}}>
                        
                        <a  className="contactFooterWork " href="work">Work</a><br/>
                        <div style={{paddingTop:'12px'}}></div>
                        <a className="contactFooterWork "href="academic" >Academic</a><br/>
                        <div style={{paddingTop:'12px'}}></div>
                        <a className="contactFooterWork "href="about">About</a><br/>
                        <div style={{paddingTop:'12px'}}></div>
                        <a className="contactFooterWork" href="#">Resume</a>
                    </div>
                    
                    <div className="col-md-1"  style={{marginTop:'69px',padding:'0'}}>
                        <a  className="contactFooterWork " href="https://www.linkedin.com/in/lee-miterani/">Linkedin 
                        {/* <a class="btn btn-outline-light btn-floating m-1 rounded-pill text-center text-white" href="#!" role="button"><i class="fab fa-facebook-f"></i></a> */}
                        </a><br/>
                        <div style={{paddingTop:'12px'}}></div>
                        <a className="contactFooterWork "href="https://www.instagram.com/lee.miterani/" >Instagram</a><br/>
                        <div style={{paddingTop:'12px'}}></div>
                        <a className="contactFooterWork "href="https://www.facebook.com/lee.miterani">Facebook</a><br/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;