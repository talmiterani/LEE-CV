import React from 'react';
import "./electra.css"; 
import GoTop from "./ScrollToTop";
const GamingHub = () => {
    return (
        <div>
            <GoTop scrollStepInPx="50" delayInMs="20" />
            <div className="container">
                <div className="col justify-content-start align-items-start pl-0 pr-0">
                    <h1 className="electraHeaderTop">Gaming Hub</h1>
                    <h1 className="electraHeaderBottom">Lotto management system</h1>
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
                    <img className="justify-content-center" style={{marginTop:'70px', maxWidth:'1110px'}} src="/GamingHubProject.png" alt=""/> 
                
                    <h1 className="project-headline">Gaming Hub is a management system that connects employees, sales teams, and managers by way of a central database.</h1>
                    <div className="role row" style={{marginTop:'150px'}}>
                        <span className="col col-lg-5">Challenge</span>
                        <span className="col">Research</span>
                    </div>
                    <div className="User-Experience-Interface row">
                        <span className="col col-lg-5">Provide a more intuitive and convenient user interface without too much change in structure.</span>
                        <span className="col">The first part of my research focused on looking at existing products to see where they have fit in. In later days I looked further afield, even in seemingly unrelated fields, to determine the best solutions for the product.</span>
                    </div>
                    <div className="role row" style={{marginTop:'150px'}}>
                        <span className="col">Target Audience</span>
                    </div>
                    <h1 className="project-headline" style={{marginTop:'10px'}}>Users who have studied the system and become familiar with it.</h1>
                    
                    <div className="role row" style={{marginTop:'150px'}}>
                        <span className="col">Style Guide</span>
                    </div>
                    <img className="justify-content-center" style={{marginTop:'30px', maxWidth:'1110px'}} src="/GamingHubStyleProject.png" alt=""/> 
                    
                    <div className="role row" style={{marginTop:'150px'}}>
                        <span className="col">Design</span>
                    </div>
                    <h1 className="project-headline" style={{marginTop:'10px'}}>With a simple interface and minimal learning curve, the platform allows for quick access to analytics & personal data.</h1>
                    
                    <div className="role row" style={{marginTop:'150px'}}>
                        <span className="col">Dashboard</span>
                    </div>
                    <img className="justify-content-center" style={{marginTop:'30px', maxWidth:'1110px'}} src="/GamingHubDashboardProject.png" alt=""/> 
                    


                    <div className="role row" style={{marginTop:'150px'}}>
                        <span className="col">Casino</span>
                    </div>
                    {/* NOTE: change the image below when Lee will give new one */}
                    <img className="justify-content-center" style={{marginTop:'30px', maxWidth:'1110px'}} src="/GamingHubCasinoProject.png" alt=""/> 
                    <div className="row"  style={{marginTop:'30px'}}>
                        <img  className="col col-lg-6"   src="/GamingHubCasinoProject1.png" alt=""/>
                        <img  className="col col-lg-6"  src="/GamingHubCasinoProject2.png" alt=""/>
                    </div>
                    <div className="row"  style={{marginTop:'30px'}}>
                        <img  className="col col-lg-6"   src="/GamingHubCasinoProject3.png" alt=""/>
                        <img  className="col col-lg-6"  src="/GamingHubCasinoProject4.png" alt=""/>
                    </div>

                    <div className="role row" style={{marginTop:'150px'}}>
                        <span className="col">Management</span>
                    </div>
                    <img className="justify-content-center" style={{marginTop:'30px', maxWidth:'1110px'}} src="/GamingHubProjectManagement.png" alt=""/> 
                    

s

                    <div style={{borderTop: '1px solid #fff', marginTop:'150px'}}></div>
                    <div className="what-next-title">
                    What’s Next?
                    </div>
                    <div className="row  justify-content-between" style={{marginTop:'50px' , marginBottom:'280px'}}>
                        <div className="col col-lg-6">
                            <a href="/electra-project">
                                <img style={{maxWidth:'540px'}} className="col position-absolute pr-0 pl-0" src="/Electra.png" alt=""/>    
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
                            <div className="Gaming-Hub">Electra</div>
                            <div className="Landing-pages">A SaaS-based performance marketing platform</div>
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

export default GamingHub;