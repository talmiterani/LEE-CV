import React from 'react';
import "./electra.css"; 
import GoTop from "./ScrollToTop";
const Electra = () => {
    return (
        <div>
            <GoTop scrollStepInPx="50" delayInMs="20" />
            <div className="container">
                <div className="col justify-content-start align-items-start pl-0 pr-0">
                    <h1 className="electraHeaderTop">Electra</h1>
                    <h1 className="electraHeaderBottom"> Performance marketing platform</h1>
                        <div className="role row">
                            <span className="col col-lg-4">Role</span>
                            <span className="col">Skills</span>
                        </div>
                        <div className="User-Experience-Interface row">
                            <span className="col col-lg-4">User Experience & Interface</span>
                            <span className="col">UX UI Design</span>

                        </div>
                        <div className="role row">
                            <span className="col col-lg-4">Duration</span>
                            <span className="col">Tools</span>
                        </div>
                        <div className="User-Experience-Interface row">
                            <span className="col col-lg-4">2020-2021</span>
                            <span className="col">Sketch, Zeplin</span>
                        </div>
                    <img className="justify-content-center" style={{marginTop:'70px', maxWidth:'1110px'}} src="/ElectraDashboardProject.png" alt=""/> 
                
                    <h1 className="project-headline">Electra is a performance marketing platform that manages, tracks, analyzes, and optimizes online advertising campaigns in real-time</h1>
                        <div className="role row" style={{marginTop:'150px'}}>
                            <span className="col col-lg-5">Challenge</span>
                            <span className="col">Research</span>
                        </div>
                        <div className="User-Experience-Interface row">
                            <span className="col col-lg-5">In order to make the experience more intuitive and comfortable, the interface structure had to be changed.</span>
                            <span className="col">For the first part of my research, I analyzed the competitive landscape to determine where they fit. Later, I searched even outside of my field of expertise to find solutions for the product.</span>
                        </div>
                    <img className="justify-content-center" style={{marginTop:'70px', maxWidth:'1110px'}} src="/ElectraDashboardProject.png" alt=""/> 
                    <div className="Competitive-Analysis">
                        Competitive Analysis
                    </div>
                    <img className="justify-content-center" style={{marginTop:'70px', maxWidth:'1110px'}} src="/ElectraCompetitiveProject.png" alt=""/>
                    <div className="Target-Audience">
                        Target Audience
                    </div>
                    <h1 className="Affiliates-in-verticals">Affiliates in verticals such as finance, casinos and lotteries</h1>
                    <div className="Style-Guide">
                        Style Guide
                    </div>
                    <img className="justify-content-center" style={{marginTop:'30px', maxWidth:'1110px'}} src="/StyleGuideProject.png" alt=""/>
                    
                    <div className="Target-Audience">
                        Design
                    </div>
                    <h1 className="Affiliates-in-verticals">Through an easy-to-use interface, the platform allows you to manage affiliates, set up rules based on traffic types, track, analyze, and optimize online advertising campaigns.</h1>
                    <div className="Style-Guide">
                        Affiliates Management
                    </div>
                    <img className="justify-content-center" style={{marginTop:'30px', maxWidth:'1110px'}} src="/AffiliatesManagmenetProject.png" alt=""/>
                    <div className="Style-Guide">
                    Dashboard
                    </div>
                    <img className="justify-content-center" style={{marginTop:'30px', maxWidth:'1110px'}} src="/ElectraDashboard.png" alt=""/>
                    <div className="Style-Guide">
                    Management
                    </div>
                    <img className="justify-content-center" style={{marginTop:'30px', maxWidth:'1110px'}} src="/ManagmentProject.png" alt=""/>
                    <div className="Style-Guide">
                    Permissions  Setup
                    </div>
                    <img className="justify-content-center" style={{marginTop:'30px', maxWidth:'1110px'}} src="/PremissionsSetup.png" alt=""/>
                    <div style={{borderTop: '1px solid #fff', marginTop:'150px'}}></div>
                    <div className="what-next-title">
                    What’s Next?
                    </div>
                    <div className="row  justify-content-between" style={{marginTop:'50px' , marginBottom:'280px'}}>
                        <div className="col col-lg-6">
                            <a href="/gaming-hub">
                                <img style={{maxWidth:'540px'}} className="col position-absolute pr-0 pl-0" src="/GammingHub.png" alt=""/>    
                            </a>
                            <button className="userExperience position-absolute" style={{cursor:'default',left:'20px'}}>User Experience</button>
                            <button className="userInterface position-absolute" style={{cursor:'default',left:'154px'}}>User Interface</button>
                        </div>
                        <div className="col col-lg-6 ">
                            <a href="/marketing-channels">
                                <img style={{maxWidth:'540px'}} className="col position-absolute pl-0 pr-0" src="/MarketingChannels.png" alt=""/>    
                            </a>
                            <button className="webDesign position-absolute" style={{cursor:'default',left:'20px'}}>Web Design</button>
                            <button className="marketing position-absolute" style={{cursor:'default',left:'125px'}}>Marketing</button>
                            <button className="branding position-absolute" style={{cursor:'default',left:'221px'}}>Branding</button>
                        </div>
                    </div>

                    <div className="role row">
                        <div className="col col-lg-6">
                            <div className="Gaming-Hub">Gaming Hub</div>
                            <div className="Landing-pages">Lotto management system</div>
                            
                        </div>
                            
                        <div className="col col-lg-6">
                            <div className="Gaming-Hub">Marketing Channels</div>
                            <div className="Landing-pages">Landing pages</div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
        
    );
};

export default Electra;