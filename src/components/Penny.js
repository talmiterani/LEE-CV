import React from "react";
import "./electra.css";
import GoTop from "./ScrollToTop";
const Penny = () => {
  return (
    <div>
      <GoTop scrollStepInPx="50" delayInMs="20" />
      <div className="container paddingSidesMobile">
        <div className="col justify-content-start align-items-start pl-0 pr-0">
          <h1 className="electraHeaderTop">Penny</h1>
          <h1 className="electraHeaderBottom">App for learning finance</h1>
          <div className="role row">
            <span className="col col-lg-4">Hosted</span>
            <span className="col">Skills</span>
          </div>
          <div className="User-Experience-Interface row">
            <span className="col col-lg-4">Orit Lichtnaier Gil</span>
            <span className="col">UX UI Design, Wireframes, Prototyping</span>
          </div>
          <div className="role row">
            <span className="col col-lg-4">Duration</span>
            <span className="col">Tools</span>
          </div>
          <div className="User-Experience-Interface row">
            <span className="col col-lg-4">10 Lessons</span>
            <span className="col">Figma</span>
          </div>
          <img
            className="justify-content-center container-img"
            style={{ marginTop: "70px" }}
            src="/PennyDashboardProject.png"
            alt=""
          />

          <h1 className="project-headline margin-top-section">
            Penny is an app that teaches children about finances. they earn
            penny’s by completing a range of bite-sized financial literacy
            modules, starting with budgeting but growing more complex as they
            advance through the app.
          </h1>
          <div className="role row margin-top-section">
            <span className="col col-lg-6">Challenge</span>
            <span className="col">Research</span>
          </div>
          <div className="User-Experience-Interface row">
            <span className="col col-lg-6">
              Economic behavior patterns are formed at an early age, so
              knowledge and awareness will improve their financial management
              skills later in life.
            </span>
            <span className="col">
              To provide a framework of knowledge, tools, and skills that will
              prepare them for successful financial management and wise
              consumption as they grow up.
            </span>
          </div>
          <div className="Competitive-Analysis margin-top-section">
            Use Case
          </div>
          <img
            className="justify-content-center container-img"
            style={{ marginTop: "30px" }}
            src="/pennyUseCase.png"
            alt=""
          />
          <div className="Target-Audience margin-top-section">
            User Interview
          </div>
          {/* <h1 className="Affiliates-in-verticals">
            Affiliates in verticals such as finance, casinos and lotteries
          </h1> */}
          {/* <div className="Style-Guide margin-top-section">Style Guide</div> */}
          <img
            className="justify-content-center container-img"
            style={{ marginTop: "30px" }}
            src="/pennyUserInterview.png"
            alt=""
          />

          {/* <div className="Target-Audience margin-top-section">Design</div>
          <h1 className="Affiliates-in-verticals">
            Through an easy-to-use interface, the platform allows you to manage
            affiliates, set up rules based on traffic types, track, analyze, and
            optimize online advertising campaigns.
          </h1> */}
          <div className="Style-Guide margin-top-section">
            Competitive Analysis
          </div>
          <img
            className="justify-content-center container-img"
            style={{ marginTop: "30px" }}
            src="/pennyAnalysis.png"
            alt=""
          />
          <div className="Style-Guide margin-top-section">
            Primary Task Flow
          </div>
          <img
            className="justify-content-center container-img"
            style={{ marginTop: "30px" }}
            src="/pennyTaskFlow.png"
            alt=""
          />
          <div className="Style-Guide margin-top-section">Wireframe</div>
          <img
            className="justify-content-center container-img"
            style={{ marginTop: "30px" }}
            src="/pennyWireframe.png"
            alt=""
          />
          <div className="Style-Guide margin-top-section">User Testing</div>
          <img
            className="justify-content-center container-img"
            style={{ marginTop: "30px" }}
            src="/pennyUserTesting.png"
            alt=""
          />
          <div className="Style-Guide margin-top-section">Style Guide</div>
          <img
            className="justify-content-center container-img"
            style={{ marginTop: "30px" }}
            src="/pennyStyleGuide.png"
            alt=""
          />
          <div className="role row margin-top-section">
            <span className="col">Design</span>
          </div>
          <h1 className="project-headline" style={{ marginTop: "10px" }}>
            Most of the time, this type of interface creates cognitive overload,
            but those that present information in bite-sized are more effective.
            Rather than falling into a childish illustration style, I chose to
            use icons alongside the text.
          </h1>
          <div className="role row margin-top-section">
            <span className="col">Game</span>
          </div>
          <img
            className="justify-content-center container-img"
            style={{ marginTop: "30px" }}
            src="/pennyGame.png"
            alt=""
          />
          <div className="Style-Guide margin-top-section">Profile</div>
          <img
            className="justify-content-center container-img"
            style={{ marginTop: "30px" }}
            src="/pennyProfile.png"
            alt=""
          />
          <div className="Style-Guide margin-top-section">Sign Up</div>
          <img
            className="justify-content-center container-img"
            style={{ marginTop: "30px" }}
            src="/pennySignUp.png"
            alt=""
          />
          <img
            className="justify-content-center container-img"
            style={{ marginTop: "30px" }}
            src="/pennySignUp2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Penny;
