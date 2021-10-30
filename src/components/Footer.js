import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      <div className="row p-0 ml-0 " style={{ marginTop: "80px" }}>
        <h4
          id="leeMiterani"
          className="LeeMiteraniFooter col-md-2 smallScreen bigScreen"
        >
          Lee Miterani
        </h4>
        <div className="col-md-3 smallScreen">
          <p className="contactFooterContact bigScreen">Contact</p>
          <span className="box-e">
            <a
              href="mailto:lee.gouetta@gmail.com"
              className="contactEmailFooter bigScreen custom-underline pointer"
            >
              Lee.gouetta@gmail.com
            </a>
          </span>
          <p></p>
          <p className="contactEmailFooter ">+972 505893277</p>
        </div>

        <div id="navigationLinks" className="col-md-4 smallScreen bigScreen">
          <a className="contactFooterWork " href="work">
            Work
          </a>
          <br />
          <div style={{ paddingTop: "10px" }}></div>
          <a className="contactFooterWork " href="academic">
            Academic
          </a>
          <br />
          <div style={{ paddingTop: "10px" }}></div>
          <a className="contactFooterWork " href="about">
            About
          </a>
          <br />
          <div style={{ paddingTop: "10px" }}></div>
          <a
            className="contactFooterWork"
            href="/LeeMiteraniResume.pdf"
            download
          >
            Resume
          </a>
        </div>

        <div className="col-md-1 smallScreen bigScreen">
          <p id="social" className="contactFooterWork">
            Social
          </p>
          <br id="social"></br>
          <a
            className="contactFooterWork "
            href="https://www.linkedin.com/in/lee-miterani/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
          <br />
          <div style={{ paddingTop: "10px" }}></div>
          <a
            className="contactFooterWork "
            href="https://www.instagram.com/lee.miterani/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <br />
          <div style={{ paddingTop: "10px" }}></div>
          <a
            className="contactFooterWork "
            href="https://www.facebook.com/lee.miterani"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <br />
        </div>
      </div>
      <div style={{ height: "50px" }} className="row"></div>
    </div>
  );
};

export default Footer;
