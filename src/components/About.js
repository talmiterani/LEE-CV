import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="container-fluid body-section">
      <div className="row">
        <div className="col-md-7 offset-md-1 p-0">
          <span className="intreductionP">
            <div>👋 Hello, my name is Lee.</div>
            <div style={{ paddingTop: "44px" }}>
              I am a Product Designer based in Ra'anana,
            </div>
            <div style={{ paddingTop: "44px" }}>
              Graduating from HIT with a bachelor's degree in Visual
              Communication.
            </div>
            <div style={{ paddingTop: "44px" }}>
              Passionate about digital products, solving complex problems, and
              designing useful and simple interfaces.
            </div>
            <div style={{ paddingTop: "44px" }}>
              I am extremely motivated to learn and develop my skills and I'm
              always up for a new challenge.
            </div>
            <div style={{ paddingTop: "44px" }}>
              Now I'm looking for new opportunities.
            </div>
            <div style={{ paddingTop: "44px" }}>I'd ❤️ to hear from you.</div>
          </span>
        </div>
        <div className="col-md-2 offset-md-1 paddingTopMobile">
          <span className="titleInAboutPage">Experience</span>
          <br></br>
          <br></br>
          <div className="textInAboutPage">
            <span style={{ fontWeight: "bold" }}>2020-2021: </span>
            <span style={{ textDecoration: "underline" }}>
              Product Designer
            </span>
            <span> at Avronim</span>
          </div>
          <br></br>
          <div className="textInAboutPage">
            <span style={{ fontWeight: "bold" }}>2021: </span>
            <span style={{ textDecoration: "underline" }}>
              Codesigner's User Experience Course
            </span>
            <span>, directed by Orit Lichtnaier Gil</span>
          </div>
          <br></br>
          <div className="textInAboutPage">
            <span style={{ fontWeight: "bold" }}>2017-2020: </span>
            <span style={{ textDecoration: "underline" }}>
              Graphic Designer
            </span>
            <span> at Pnay Plus (Yedioth Ahronoth Group)</span>
          </div>
          <br></br>
          <div className="textInAboutPage">
            <span style={{ fontWeight: "bold" }}>2015 - 2019: </span>
            <span style={{ textDecoration: "underline" }}>
              Bachelor's degree In Visual Communication
            </span>
            <span> from Holon Institute of Technology, HIT</span>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span className="titleInAboutPage paddingTopMobile">
            Fun Facts About Me
          </span>
          <br></br>
          <br></br>
          <div className="textInAboutPage">
            <span>🌱 I have a growing plant collection</span>
          </div>
          <br></br>
          <div className="textInAboutPage">
            <span>🐶 I become a puppy parent in </span>
            <br></br>
            <span>early 2021</span>
          </div>
          <br></br>
          <div className="textInAboutPage">
            <span>🍪 I L O V E to bake and I'm pretty good at it</span>
          </div>
          <br></br>
          <div className="textInAboutPage">
            <span>🎸 I studied guitar for 8 years</span>
          </div>
        </div>
      </div>
    </div>
  );
}
