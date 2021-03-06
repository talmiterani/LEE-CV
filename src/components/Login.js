import React, { useRef } from "react";

import "./login.css";
const Login = (props) => {
  const passwordRef = useRef();
  const passwordValidation = () => {
    if (passwordRef.current.value === "123456") {
      localStorage.setItem("token", JSON.stringify("userLoggedIn"));
      window.location.href = localStorage.getItem("project");
      localStorage.removeItem("project");
    } else {
      document.getElementById("inputPassword")
        ? document
            .getElementById("inputPassword")
            .setAttribute("class", "form-control is-invalid")
        : console.log("asdasd");
    }
  };
  return (
    <div className="container position-relative paddingSidesMobile">
      <div
        className="row justify-content-center "
        style={{ marginTop: "140px", color: "white", background: "black" }}
      >
        <h5
          className="card-title p-0 m-0"
          style={{ fontFamily: "Roboto", fontSize: "20px", fontWeight: "500" }}
        >
          Protected page
        </h5>
      </div>
      <div
        id="formLogin"
        className="form-floating row justify-content-center"
        style={{ color: "white", background: "black" }}
      >
        <div className="form-group ">
          <input
            required
            name="password"
            ref={passwordRef}
            onKeyPress={(event) => {
              console.log("sdfsdf");
              if (event.key === "Enter") {
                passwordValidation();
              }
            }}
            style={{
              marginTop: "32px",
              width: " 280px",
              height: "48px",
              fontFamily: "Poppins",
              fontSize: "14px",
            }}
            type="password"
            id="inputPassword"
            className=" inputPassword form-control border border-0"
          />
          <label className=" form-control-placeholder" forhtml="inputPassword">
            Enter Password
          </label>
          <div className="invalid-feedback m-0">
            Sorry, that password isn???t right.
          </div>
        </div>
      </div>
      <div
        className="row justify-content-center"
        style={{ color: "white", background: "black" }}
      >
        <button
          type="submit"
          style={{
            width: " 280px",
            height: "36px",
            fontFamily: "Roboto",
            fontSize: "14px",
          }}
          className="btn btn-primary submitButton"
          onClick={() => {
            passwordValidation();
          }}
        >
          Submit
        </button>
      </div>
      <div className="row For-Recruiters">
        <div className="col-md-5 pr-4 login-padding-left-recruiters">
          <div>For Recruiters</div>
          <div className="instructions">
            Please check the resume I sent or uploaded with the application. It
            has a password to open this page.
          </div>
        </div>
        <div
          className="col-md-5 padding-top-for-everone-else"
          style={{ paddingRight: "75px", paddingLeft: "20px" }}
        >
          <div>For Everyone Else</div>
          <div className="instructions">
            If you are someone who is curious to see this page, send me an email
            to{" "}
            <span className="box-e">
              <a
                href="mailto:lee.gouetta@gmail.com "
                className=" custom-underline pointer"
              >
                Lee.gouetta@gmail.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
