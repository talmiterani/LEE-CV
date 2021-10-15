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
        <div id="cf" style={{ marginTop: "70px" }}>
          <span>
            <div className="row justify-content-center position-relative">
              <a href="/Big-Fat-Lies-project">
                <img
                  onMouseOver={() => {
                    document.body.classList.remove("backGroundColorChangeBack");
                    document.body.classList.add("backGroundColorChangeRed");
                  }}
                  onMouseLeave={() => {
                    document.body.classList.remove("backGroundColorChangeRed");
                    document.body.classList.add("backGroundColorChangeBack");
                  }}
                  className="top justify-content-center position-absolute "
                  src="/BigFatLies.png "
                  srcSet="/BigFatLies@2x.png 2x,/BigFatLies@3x.png 3x"
                />
                <img
                  src="/Hebrew.jpg"
                  srcSet="/Hebrew@2x.jpg 2x,/Hebrew@3x.jpg 3x"
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
              {/* <button
                className="Tags1 position-absolute"
                style={{ cursor: "default" }}
              >
                Web Design
              </button>
              <button
                className="Tags2 position-absolute"
                style={{ cursor: "default" }}
              >
                Marketing
              </button>
              <button
                className="Tags3 position-absolute"
                style={{ cursor: "default" }}
              >
                Visual Identity
              </button> */}
            </div>
          </span>
        </div>

        <div class="row">
          <div
            style={{ paddingLeft: "30px" }}
            className="image-title col-md-12 offset-md-1"
          >
            Penny
          </div>
        </div>
        <div class="row">
          <div
            style={{ paddingLeft: "30px" }}
            className="textDis col-12 offset-md-1"
          >
            App for learning finance
          </div>
        </div>

        <div id="cf" style={{ marginTop: "70px" }}>
          <span>
            <div className="row justify-content-center position-relative">
              <a href="/Big-Fat-Lies-project">
                <img
                  onMouseOver={() => {
                    document.body.classList.remove("backGroundColorChangeBack");
                    document.body.classList.add("backGroundColorChangeBlue");
                  }}
                  onMouseLeave={() => {
                    document.body.classList.remove("backGroundColorChangeBlue");
                    document.body.classList.add("backGroundColorChangeBack");
                  }}
                  className="top justify-content-center position-absolute "
                  src="/BigFatLies.png "
                  srcSet="/BigFatLies@2x.png 2x,/BigFatLies@3x.png 3x"
                />
                <img
                  src="/Hebrew.jpg"
                  srcSet="/Hebrew@2x.jpg 2x,/Hebrew@3x.jpg 3x"
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
          </span>
        </div>

        <div class="row">
          <div
            style={{ paddingLeft: "30px" }}
            className="image-title col-md-12 offset-md-1"
          >
            Look Around
          </div>
        </div>
        <div class="row">
          <div
            style={{ paddingLeft: "30px" }}
            className="textDis col-12 offset-md-1"
          >
            Furniture shopping app
          </div>
        </div>

        <div id="cf" style={{ marginTop: "70px" }}>
          <span>
            <div className="row justify-content-center position-relative">
              <a href="/Big-Fat-Lies-project">
                <img
                  onMouseOver={() => {
                    document.body.classList.remove("backGroundColorChangeBack");
                    document.body.classList.add("backGroundColorChangePink");
                  }}
                  onMouseLeave={() => {
                    document.body.classList.remove("backGroundColorChangePink");
                    document.body.classList.add("backGroundColorChangeBack");
                  }}
                  className="top justify-content-center position-absolute "
                  src="/Hebrew.jpg"
                  srcSet="/Hebrew@2x.jpg 2x,/Hebrew@3x.jpg 3x"
                />
                <img
                  src="/BigFatLies.png "
                  srcSet="/BigFatLies@2x.png 2x,/BigFatLies@3x.png 3x"
                />
              </a>
              <button
                className="Tags1 position-absolute"
                style={{ cursor: "default" }}
              >
                Web Design
              </button>
              <button
                className="Tags2 position-absolute"
                style={{ cursor: "default" }}
              >
                Marketing
              </button>
              <button
                className="Tags3 position-absolute"
                style={{ cursor: "default", background: "#f2994a" }}
              >
                Photography
              </button>
              <button
                className="Tags4 position-absolute"
                style={{ cursor: "default" }}
              >
                Photography
              </button>
            </div>
          </span>
        </div>

        <div class="row">
          <div
            style={{ paddingLeft: "30px" }}
            className="image-title col-md-12 offset-md-1"
          >
            That's How It's In Hebrew
          </div>
        </div>
        <div class="row">
          <div
            style={{ paddingLeft: "30px" }}
            className="textDis col-12 offset-md-1"
          >
            Guerilla campaign to promote Hebrew language
          </div>
        </div>
      </div>
    </div>
  );
}
