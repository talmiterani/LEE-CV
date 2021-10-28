import React from "react";
import "./academic.css";
import GoTop from "./ScrollToTop";

export default function Academic() {
  return (
    <div className="container paddingSidesMobile">
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
            <a href="/Penny-project">
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
                src="/penny.png"
                alt=""
              />
              <img className="container-img" src="/penny-hover.png" alt="" />
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
        <div className="row container pl-0">
          <div className="image-title title-work-margin-left">Penny</div>
        </div>
        <div className="row container pl-0">
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
            <div>
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
                src="/comingSoon1.png"
                alt=""
              />
              <img className="container-img" src="/comingSoon1.png" alt="" />
            </div>
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
        <div className="row container pl-0">
          <div className="image-title title-work-margin-left">Look Around</div>
        </div>
        <div className="row container pl-0">
          <div className="textDis title-work-margin-left">
            Furniture shopping app
          </div>
        </div>
        <div
          className="justify-content-center d-flex"
          id="cf"
          style={{ marginTop: "70px" }}
        >
          <div className="row position-relative">
            <div>
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
                src="/comingSoon2.png"
                alt=""
              />
              <img className="container-img" src="/comingSoon2.png" alt="" />
            </div>
            <button
              className="webDesign position-absolute"
              style={{ cursor: "default", left: "20px" }}
            >
              Web Design
            </button>
            <button
              className="marketing position-absolute"
              style={{ cursor: "default", left: "126px" }}
            >
              Marketing
            </button>
            <button
              className="branding position-absolute display-none-on-mobile"
              style={{ cursor: "default", left: "221px" }}
            >
              Branding
            </button>

            <button
              className="branding position-absolute dfferent-padding"
              style={{
                cursor: "default",
                background: "#ff5ee5",
              }}
            >
              Illustration
            </button>
          </div>
        </div>
        <div className="row container pl-0">
          <div className="image-title  title-work-margin-left">
            That's How It's In Hebrew
          </div>
        </div>
        <div className="row container pl-0">
          <div className="textDis  title-work-margin-left">
            Guerilla campaign to promote Hebrew language
          </div>
        </div>
      </div>
    </div>
  );
}
