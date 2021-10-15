import React from "react";
import "./electra.css";
import GoTop from "./ScrollToTop";
const MarketingChannels = () => {
  return (
    <div>
      <GoTop scrollStepInPx="50" delayInMs="20" />
      <div className="container">
        <div className="col justify-content-start align-items-start pl-0 pr-0">
          <h1 className="electraHeaderTop">Marketing Channels</h1>
          <h1 className="electraHeaderBottom">Landing pages</h1>
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
          <img
            className="justify-content-center container-img"
            style={{ marginTop: "70px" }}
            src="/MarketingProject.png"
            alt=""
          />

          <h1 className="project-headline">
            We engage with consumers directly through their preferred
            communication channels, such as push notifications, SMS, and email.
          </h1>
          <div className="role row" style={{ marginTop: "150px" }}>
            <span className="col col-lg-5">Challenge</span>
            <span className="col">Research</span>
          </div>
          <div className="User-Experience-Interface row">
            <span className="col col-lg-5">
              In order to attract new B2B customers, we need to create landing
              pages showcasing our products.
            </span>
            <span className="col">
              My early research focused on exploring different related solutions
              that are already out there, and how do these products serve their
              users. In later research I examined far and wide, even in
              seemingly unrelated fields, to find the best solutions for the
              product.
            </span>
          </div>
          <div className="role row" style={{ marginTop: "150px" }}>
            <span className="col">Design</span>
          </div>
          <h1 className="project-headline" style={{ marginTop: "10px" }}>
            Each landing page is designed to fit its product. In the case of
            Athena, I focused on the presentation of the platform, while for
            E-Wave, I tried to communicate different values.
          </h1>

          <div className="role row" style={{ marginTop: "150px" }}>
            <span className="col">E-Wave</span>
          </div>
          <img
            className="justify-content-center container-img"
            style={{ marginTop: "30px" }}
            src="/MarketingEWaveProject.png"
            alt=""
          />

          <div className="role row" style={{ marginTop: "150px" }}>
            <span className="col">Athena</span>
          </div>
          <img
            className="justify-content-cente container-img"
            style={{ marginTop: "30px" }}
            src="/MarketingAthenaProject.png"
            alt=""
          />

          <div className="role row" style={{ marginTop: "150px" }}>
            <span className="col">TextBlast</span>
          </div>
          {/* NOTE: change the image below when Lee will give new one */}
          <img
            className="justify-content-center container-img"
            style={{ marginTop: "30px" }}
            src="/TextBlast.png"
            alt=""
          />

          <div
            style={{ borderTop: "1px solid #fff", marginTop: "150px" }}
          ></div>
          <div className="what-next-title">What’s Next?</div>
          <div
            className="row  justify-content-between"
            style={{ marginTop: "50px", marginBottom: "280px" }}
          >
            <div className="col col-lg-6 col-sx-12">
              <a href="/gaming-hub">
                <img
                  className="col position-absolute pr-0 pl-0 container-img"
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
            </div>
            <div className="col col-lg-6col-sx-12 ">
              <a href="/electra-project">
                <img
                  className="col position-absolute pr-0 pl-0 container-img"
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
            </div>
          </div>

          <div className="role row">
            <div className="col col-lg-6 col-sx-12">
              <div className="Gaming-Hub">Gaming Hub</div>
              <div className="Landing-pages">Lotto management system</div>
            </div>

            <div className="col col-lg-6 col-sx-12">
              <div className="Gaming-Hub">Electra</div>
              <div className="Landing-pages">
                A SaaS-based performance marketing platform
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingChannels;
