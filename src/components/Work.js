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
    <div className="container">
            <h1 className="headlineAcademic">Designing digital products that solve users and business problems</h1>
            <div className="justify-content-center d-flex" id="cf" style={{marginTop:'70px'}}>

                    <div className="row position-relative">
                      <a className="col" href="/electra-project">
                          <img
                              onMouseOver={() => {  
                                      document.body.classList.remove("backGroundColorChangeBack") 
                                      document.body.classList.add("backGroundColorChangeGreen")   }}
                              onMouseLeave={() => { 
                                      document.body.classList.remove("backGroundColorChangeGreen")     
                                      document.body.classList.add("backGroundColorChangeBack")   }}
                              className="container-img top position-absolute " src="/Electra.png" alt=""/> 
                          <img className="container-img " src="/ElectraDashboardHP.png" alt=""/> 
                        </a>
                        <button className="userExperience position-absolute" style={{cursor:'default', left:'20px'}}>User Experience</button>
                        <button className="userInterface position-absolute" style={{cursor:'default', left:'154px'}}>User Interface</button>
                    </div>
                    
            </div>
              <div class="row">
                <div className="role col col-md-3 offset-md-1">Electra</div>
              </div>
              <div class="row">  
                <div className="textDis col-md-3 offset-md-2">A SaaS-based performance marketing platform</div>
              </div>


            <div  className="justify-content-center d-flex" id="cf" style={{marginTop:'70px'}}>
                    <div className="row position-relative">
                      <a className="col" href="/marketing-channels">
                          <img
                            onMouseOver={() => {  
                                    document.body.classList.remove("backGroundColorChangeBack") 
                                    document.body.classList.add("backGroundColorChangePurple")   }}
                            onMouseLeave={() => { 
                                    document.body.classList.remove("backGroundColorChangePurple")     
                                    document.body.classList.add("backGroundColorChangeBack")   }}
                            className="top container-img position-absolute " src="/MarketingChannels.png" alt=""/> 
                        <img className="container-img" src="/MarketingEWaveHP.png" alt=""/> 
                      </a>
                        <button className="webDesign position-absolute" style={{cursor:'default', left:'20px'}}>Web Design</button>
                        <button className="marketing position-absolute" style={{cursor:'default', left:'127px'}}>Marketing</button>
                        <button className="branding position-absolute" style={{cursor:'default', left:'216px'}}>Branding</button>
                      
                    </div>
            </div>
                <div className="role">Marketing Channels</div>
                <div className="textDis">Landing pages</div>



            <div className="justify-content-center d-flex" id="cf" style={{marginTop:'70px'}}>
                    <div className="row position-relative">
                      <a className="col" href="/gaming-hub">
                          <img
                              onMouseOver={() => {  
                                      document.body.classList.remove("backGroundColorChangeBack") 
                                      document.body.classList.add("backGroundColorChangeYellow")   }}
                              onMouseLeave={() => { 
                                      document.body.classList.remove("backGroundColorChangeYellow")     
                                      document.body.classList.add("backGroundColorChangeBack")   }}
                              className="top container-img justify-content-center position-absolute " src="/GammingHub.png" alt=""/> 
                          <img className="container-img" src="/GamingHubCasinoHP.png" alt=""/> 
                      </a>
                      <button className="userExperience position-absolute" style={{cursor:'default', left:'20px'}}>User Experience</button>
                      <button className="userInterface position-absolute" style={{cursor:'default', left:'154px'}}>User Interface</button>
                        
                    </div>
            </div>
                <div className="role">Gaming Hub</div>
                <div className="textDis">Lotto management system</div>
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
