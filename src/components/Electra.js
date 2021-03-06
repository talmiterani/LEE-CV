import React from "react";
import "./electra.css";
import GoTop from "./ScrollToTop";
const Electra = () => {
  return (
    <div>
      <GoTop scrollStepInPx="50" delayInMs="20" />
      <div className="container paddingSidesMobile">
        <div className="col justify-content-start align-items-start pl-0 pr-0">
          <h1 className="electraHeaderTop">Electra</h1>
          <h1 className="electraHeaderBottom">
            Performance marketing platform
          </h1>
          <div className="role row" style={{ paddingTop: "62px" }}>
            <span className="col col-lg-4">Role</span>
            <span className="col">Skills</span>
          </div>
          <div className="User-Experience-Interface row">
            <span className="col col-lg-4">User Experience & Interface</span>
            <span className="col">UX UI Design</span>
          </div>
          <div className="role row" style={{ paddingTop: "62px" }}>
            <span className="col col-lg-4">Duration</span>
            <span className="col">Tools</span>
          </div>
          <div className="User-Experience-Interface row">
            <span className="col col-lg-4">2020-2021</span>
            <span className="col">Sketch, Zeplin</span>
          </div>
          <img
            className="justify-content-center container-img"
            style={{ marginTop: "70px" }}
            src="/ElectraDashboardProject.png"
            alt=""
          />

          <h1 className="project-headline margin-top-section">
            Electra is a performance marketing platform that manages, tracks,
            analyzes, and optimizes online advertising campaigns in real-time
          </h1>
          <div className="row">
            <div className="col-lg-5 margin-top-section">
              <div className="role">Challenge</div>
              <div className="User-Experience-Interface">
                In order to make the experience more intuitive and comfortable,
                the interface structure had to be changed.
              </div>
            </div>
            <div className="col-lg-7 margin-top-section">
              <div className="role">Research</div>
              <div className="User-Experience-Interface">
                For the first part of my research, I analyzed the competitive
                landscape to determine where they fit. Later, I searched even
                outside of my field of expertise to find solutions for the
                product.
              </div>
            </div>
          </div>
          <div className="Competitive-Analysis margin-top-section">
            Competitive Analysis
          </div>
          <img
            className="justify-content-center container-img"
            style={{ marginTop: "30px" }}
            src="/ElectraCompetitiveProject.png"
            alt=""
          />
          <div className="Target-Audience margin-top-section">
            Target Audience
          </div>
          <h1 className="Affiliates-in-verticals">
            Affiliates in verticals such as finance, casinos and lotteries
          </h1>
          <div className="Style-Guide margin-top-section">Style Guide</div>
          <img
            className="justify-content-center container-img"
            style={{ marginTop: "30px" }}
            src="/StyleGuideProject.png"
            alt=""
          />

          <div className="Target-Audience margin-top-section">Design</div>
          <h1 className="Affiliates-in-verticals">
            Through an easy-to-use interface, the platform allows you to manage
            affiliates, set up rules based on traffic types, track, analyze, and
            optimize online advertising campaigns.
          </h1>
          <div className="Style-Guide margin-top-section">
            Affiliates Management
          </div>
          <img
            className="justify-content-center container-img"
            style={{ marginTop: "30px" }}
            src="/AffiliatesManagmenetProject.png"
            alt=""
          />
          <div className="Style-Guide margin-top-section">Dashboard</div>
          <img
            className="justify-content-center container-img"
            style={{ marginTop: "30px" }}
            src="/ElectraDashboard.png"
            alt=""
          />
          <div className="Style-Guide margin-top-section">Management</div>
          <img
            className="justify-content-center container-img"
            style={{ marginTop: "30px" }}
            src="/ManagmentProject.png"
            alt=""
          />
          <div className="Style-Guide margin-top-section">
            Permissions Setup
          </div>
          <img
            className="justify-content-center container-img"
            style={{ marginTop: "30px" }}
            src="/PremissionsSetup.png"
            alt=""
          />
          <div
            className="margin-top-section"
            style={{ borderTop: "1px solid #fff" }}
          ></div>

          <div className="what-next-title">What???s Next?</div>

          <div className="row">
            <div className="col-lg-6 col-sm-12 " style={{ marginTop: "50px" }}>
              <a href="/gaming-hub">
                <img
                  className="col position-absolute pr-4 pl-0 "
                  src="/GammingHub.png"
                  alt=""
                />
              </a>

              <button
                className="userExperience position-absolute"
                style={{ cursor: "default", left: "33px" }}
              >
                User Experience
              </button>
              <button
                className="userInterface position-absolute"
                style={{ cursor: "default", left: "167px" }}
              >
                User Interface
              </button>
              <div className="role next-projects-images-text what-is-next-images-text">
                <div className="Gaming-Hub">Gaming Hub</div>
                <div className="Landing-pages">Lotto management system</div>
              </div>
            </div>
            <div className="col-lg-6  col-sm-12" style={{ marginTop: "50px" }}>
              <a href="/marketing-channels">
                <img
                  className="col position-absolute pl-0 pr-4"
                  src="/MarketingChannels.png"
                  alt=""
                  style={{ paddingRight: "30px" }}
                />
              </a>

              <button
                className="webDesign position-absolute"
                style={{ cursor: "default", left: "33px" }}
              >
                Web Design
              </button>
              <button
                className="marketing position-absolute"
                style={{ cursor: "default", left: "139px" }}
              >
                Marketing
              </button>
              <button
                className="branding position-absolute"
                style={{ cursor: "default", left: "234px" }}
              >
                Branding
              </button>
              <div className=" role next-projects-images-text what-is-next-images-text ">
                <div className="Gaming-Hub">Marketing Channels</div>
                <div className="Landing-pages">Landing pages</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electra;
