import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="container paddingSidesMobile">
      <form
        action="mailto:lee.gouetta@gmail.com"
        method="POST"
        encType="text/plain"
        name="EmailForm"
        className="pl-3"
      >
        <div className="row">
          <div className="offset-md-2">
            <h1 className="contact">Contact</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-12 offset-md-2 pl-0">
            <label
              className="labelName"
              htmlFor="name"
              style={{ marginBottom: "20px" }}
            >
              Name
            </label>
            <input
              name="Name: "
              type="text"
              className="form-control"
              id="name"
            />
          </div>
          <div className="col-md-4 col-sm-12 email-padding-left">
            <label
              className="labelEmail"
              htmlFor="email"
              style={{ marginBottom: "20px" }}
            >
              Email
            </label>
            <input
              name="email: "
              type="email"
              className="form-control"
              id="email"
            />
          </div>
        </div>

        <div className=" row">
          <div className="col-md-7 offset-md-2 pl-0">
            <label className="labelMessage" htmlFor="name">
              Message
            </label>
            <textarea
              name="Message: "
              id="message"
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 offset-md-2 pl-0">
            <button type="submit" className="btn btn-primary contactSubmitBtn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
