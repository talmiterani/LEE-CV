import React from "react";
import "./academic.css";
import GoTop from "./ScrollToTop";

export default function Academic() {
  return (
    <div className="container">
      <GoTop scrollStepInPx="50" delayInMs="20" />
      <h1 className="headlineAcademic">
        I studied Visual Communication at HIT and User Experience at Codesigner
      </h1>

      <div className="container">
        <div
          className="justify-content-center d-flex"
          id="cf"
          style={{ marginTop: "70px" }}
        >
          <div className="row position-relative">
            <a href="/panne">
              <img
                onMouseOver={() => {
                  document.body.classList.remove("backGroundColorChangeBack");
                  document.body.classList.add("backGroundColorChangeRed");
                }}
                onMouseLeave={() => {
                  document.body.classList.remove("backGroundColorChangeRed");
                  document.body.classList.add("backGroundColorChangeBack");
                }}
                className="container-img top position-absolute "
                src="/BigFatLies.png"
                alt=""
              />
              {/* change images */}
              <img
                className="container-img"
                src="/ElectraDashboardHP.png"
                alt=""
              />
            </a>
            <button
              className="Tags1 position-absolute"
              style={{
                cursor: "default",
                background: "#2d34db",
              }}
            >
              App Design
            </button>
          </div>
        </div>
        <div className="row">
          <div className="image-title title-work-margin-left">Penny</div>
        </div>
        <div className="row">
          <div className="textDis title-work-margin-left">
            App for learning finance
          </div>
        </div>
        <div
          className="justify-content-center d-flex"
          id="cf"
          style={{ marginTop: "70px" }}
        >
          <div className="row position-relative">
            <a href="/marketing-channels">
              <img
                onMouseOver={() => {
                  document.body.classList.remove("backGroundColorChangeBack");
                  document.body.classList.add("backGroundColorChangePurple");
                }}
                onMouseLeave={() => {
                  document.body.classList.remove("backGroundColorChangeRed");
                  document.body.classList.add("backGroundColorChangeBack");
                }}
                className="top container-img position-absolute "
                src="/MarketingChannels.png"
                alt=""
              />
              <img
                className="container-img"
                src="/MarketingEWaveHP.png"
                alt=""
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
              style={{ cursor: "default", left: "140px" }}
            >
              Marketing
            </button>
            <button
              className="branding position-absolute"
              style={{ cursor: "default", left: "235px" }}
            >
              Branding
            </button>
          </div>
        </div>
        <div className="row">
          <div className="image-title title-work-margin-left">
            Marketing Channels
          </div>
        </div>
        <div className="row">
          <div className="textDis title-work-margin-left">Landing pages</div>
        </div>
        <div
          className="justify-content-center d-flex"
          id="cf"
          style={{ marginTop: "70px" }}
        >
          <div className="row position-relative">
            <a href="/gaming-hub">
              <img
                onMouseOver={() => {
                  document.body.classList.remove("backGroundColorChangeBack");
                  document.body.classList.add("backGroundColorChangeYellow");
                }}
                onMouseLeave={() => {
                  document.body.classList.remove("backGroundColorChangeYellow");
                  document.body.classList.add("backGroundColorChangeBack");
                }}
                className="top container-img justify-content-center position-absolute "
                src="/GammingHub.png"
                alt=""
              />
              <img
                className="container-img"
                src="/GamingHubCasinoHP.png"
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
        <div className="row">
          <div className="image-title  title-work-margin-left">Gaming Hub</div>
        </div>
        <div className="row">
          <div className="textDis  title-work-margin-left">
            Lotto management system
          </div>
        </div>
      </div>
    </div>
  );
}
