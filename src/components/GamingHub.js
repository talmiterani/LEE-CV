import React from "react";
import "./electra.css";
import GoTop from "./ScrollToTop";
const GamingHub = () => {
  return (
    <div>
      <GoTop scrollStepInPx="50" delayInMs="20" />
      <div className="container paddingSidesMobile">
        <div className="col justify-content-start align-items-start pl-0 pr-0">
          <h1 className="electraHeaderTop">Gaming Hub</h1>
          <h1 className="electraHeaderBottom">Lotto management system</h1>
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
            src="/GamingHubProject.png"
            alt=""
          />
          <h1 className="project-headline margin-top-section">
            Gaming Hub is a management system that connects employees, sales
            teams, and managers by way of a central database.
          </h1>

          <div className="row">
            <div className="col-lg-5 margin-top-section">
              <div className="role">Challenge</div>
              <div className="User-Experience-Interface">
                Provide a more intuitive and convenient user interface without
                too much change in structure.
              </div>
            </div>
            <div className="col-lg-7 margin-top-section">
              <div className="role">Research</div>
              <div className="User-Experience-Interface">
                The first part of my research focused on looking at existing
                products to see where they have fit in. In later days I looked
                further afield, even in seemingly unrelated fields, to determine
                the best solutions for the product.
              </div>
            </div>
          </div>

          <div className="role row margin-top-section">
            <span className="col">Target Audience</span>
          </div>
          <h1 className="project-headline" style={{ marginTop: "10px" }}>
            Users who have studied the system and become familiar with it.
          </h1>
          <div className="role row margin-top-section">
            <span className="col">Style Guide</span>
          </div>
          <img
            className="justify-content-center container-img"
            style={{ marginTop: "30px" }}
            src="/GamingHubStyleProject.png"
            alt=""
          />
          <div className="role row margin-top-section">
            <span className="col">Design</span>
          </div>
          <h1 className="project-headline" style={{ marginTop: "10px" }}>
            With a simple interface and minimal learning curve, the platform
            allows for quick access to analytics & personal data.
          </h1>
          <div className="role row margin-top-section">
            <span className="col">Dashboard</span>
          </div>
          <img
            className="justify-content-center container-img"
            style={{ marginTop: "30px" }}
            src="/GamingHubDashboardProject.png"
            alt=""
          />
          <div className="role row margin-top-section">
            <span className="col">Casino</span>
          </div>
          {/* NOTE: change the image below when Lee will give new one */}
          <img
            className="justify-content-center container-img"
            style={{ marginTop: "30px" }}
            src="/GamingHubCasinoProject.png"
            alt=""
          />
          <div className="row" style={{ marginTop: "30px" }}>
            <img
              className="col-lg-6 col-sm-12"
              src="/GamingHubCasinoProject1.png"
              alt=""
            />
            <img
              className="col-lg-6 col-sm-12 gamin-hub-four-images"
              src="/GamingHubCasinoProject2.png"
              alt=""
            />
          </div>
          <div className="row" style={{ marginTop: "30px" }}>
            <img
              className="col-lg-6 col-sm-12"
              src="/GamingHubCasinoProject3.png"
              alt=""
            />
            <img
              className="col-lg-6 col-sm-12 gamin-hub-four-images "
              src="/GamingHubCasinoProject4.png"
              alt=""
            />
          </div>
          <div className="role row margin-top-section">
            <span className="col">Management</span>
          </div>
          <img
            className="justify-content-center container-img"
            style={{ marginTop: "30px" }}
            src="/GamingHubProjectManagement.png"
            alt=""
          />
          <div
            className="margin-top-section"
            style={{ borderTop: "1px solid #fff" }}
          ></div>
          <div className="what-next-title">What???s Next?</div>
          <div className="row">
            <div className="col-lg-6 col-sm-12 " style={{ marginTop: "50px" }}>
              <a href="/electra-project">
                <img
                  className="col position-absolute pr-4 pl-0 "
                  src="/Electra.png"
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
                <div className="Gaming-Hub">Electra</div>
                <div className="Landing-pages">
                  A SaaS-based performance marketing platform
                </div>
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
              <div className=" role next-projects-images-text what-is-next-images-text">
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

export default GamingHub;
