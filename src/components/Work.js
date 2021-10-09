import React,{useEffect, useState}  from 'react'
import "./work.css"; 
import GoTop from "./ScrollToTop";

export default function Work() {
const [reload, setReload] = useState(false)


  const ReloadEnter = () =>{
    
    return(
      <section className="animation-box d-flex justify-content-center">
    <div class="first-text " style={{fontWeight: '500',fontFamily: 'Roboto',color:'white', fontSize:'24px'}}>Lee Miterani</div>
    </section>
    )}

  const NotReloadEnter = () =>{
    return(<>
    <GoTop scrollStepInPx="50" delayInMs="20" />
            <h1 className="headlineAcademic">Designing digital products that solve users and business problems</h1>
            <div  id="cf" style={{marginTop:'70px'}}>
                    <div className="row justify-content-center position-relative ">
                      <a href="/electra-project">
                          <img
                              onMouseOver={() => {  
                                      document.body.classList.remove("backGroundColorChangeBack") 
                                      document.body.classList.add("backGroundColorChangeGreen")   }}
                              onMouseLeave={() => { 
                                      document.body.classList.remove("backGroundColorChangeGreen")     
                                      document.body.classList.add("backGroundColorChangeBack")   }}
                              className="top justify-content-center position-absolute " src="/Electra.png" alt=""/> 
                          <img  src="/ElectraDashboardHP.png" alt=""/> 
                        </a>
                        <button className="userExperience position-absolute" style={{cursor:'default',marginRight:'700px'}}>User Experience</button>
                        <button className="userInterface position-absolute" style={{cursor:'default'}}>User Interface</button>
                    </div>
            </div>
            <div className="container">
                <div className=" justify-content-start">
                    <div className="textHeaderDis">Electra</div>
                    <div className="textDis">A SaaS-based performance marketing platform</div>
                </div>
            </div>



            <div  id="cf" style={{marginTop:'70px'}}>
                    <div className="row justify-content-center position-relative">
                      <a href="/marketing-channels">
                          <img
                            onMouseOver={() => {  
                                    document.body.classList.remove("backGroundColorChangeBack") 
                                    document.body.classList.add("backGroundColorChangePurple")   }}
                            onMouseLeave={() => { 
                                    document.body.classList.remove("backGroundColorChangePurple")     
                                    document.body.classList.add("backGroundColorChangeBack")   }}
                            className="top justify-content-center position-absolute " src="/MarketingChannels.png" alt=""/> 
                        <img src="/MarketingEWaveHP.png" alt=""/> 
                      </a>
                        <button className="webDesign position-absolute" style={{cursor:'default'}}>Web Design</button>
                        <button className="marketing position-absolute" style={{cursor:'default'}}>Marketing</button>
                        <button className="branding position-absolute" style={{cursor:'default'}}>Branding</button>
                      
                    </div>
            </div>
            <div className="container">
                <div className=" justify-content-start">
                    <div className="textHeaderDis">Marketing Channels</div>
                    <div className="textDis">Landing pages</div>
                </div>
            </div>



            <div  id="cf" style={{marginTop:'70px'}}>
                    <div className="row justify-content-center position-relative">
                      <a href="/gaming-hub">
                          <img
                              onMouseOver={() => {  
                                      document.body.classList.remove("backGroundColorChangeBack") 
                                      document.body.classList.add("backGroundColorChangeYellow")   }}
                              onMouseLeave={() => { 
                                      document.body.classList.remove("backGroundColorChangeYellow")     
                                      document.body.classList.add("backGroundColorChangeBack")   }}
                              className="top justify-content-center position-absolute " src="/GammingHub.png" alt=""/> 
                          <img  src="/GamingHubCasinoHP.png" alt=""/> 
                      </a>
                      <button className="userExperience position-absolute" style={{cursor:'default',marginRight:'700px'}}>User Experience</button>
                      <button className="userInterface position-absolute" style={{cursor:'default'}}>User Interface</button>
                        
                    </div>
            </div>
            <div className="container">
                <div className=" justify-content-start">
                    <div className="textHeaderDis">Gaming Hub</div>
                    <div className="textDis">Lotto management system</div>
                </div>
            </div>
            </>)
  }
  useEffect(() => {
    if(window.performance.memory.usedJSHeapSize>35000000){
        console.log(window.performance.memory.usedJSHeapSize)
        setReload(true)
    }
  }, [])
    return (
         <div >
           <NotReloadEnter/>
           {/* {reload?<ReloadEnter/>:<NotReloadEnter/>} */}
        </div>

    )
}
