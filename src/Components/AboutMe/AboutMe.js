import React from "react";
import "./AboutMe.css";
import profile from "../../assets/Home/profile.jpg";

const AboutMe = () => {
  return (
    <div id="AboutMe" className=" container pt-5">
      <h1 className=" text-center aboutme ">About Me</h1>
      <div className="d-flex justify-content-center align-items-center">
        <div className="ml"></div>
        <div className="mi"></div>
        <div className="mr"></div>
      </div>
      <div class="card mt-5 shadow-lg">
        <div class="row no-gutters">
          <div class="col-md-5">
            <img
              class="card-img rounded-0 h-100 "
              src={profile}
              alt=" Card img"
            />
          </div>
          <div class="col-md-7">
            <div class="card-body h-100 d-flex flex-column  justify-content-between">
              <h5 class="card-title text-center">Why Choose Me?</h5>
              <p class="card-text">
                Full stack developer with background knowledge of MERN stacks
                with a knack of building applications with utmost efficiency.
                Strong professional with a BSC willing to be an asset for an
                organization.
              </p>
              <h5>Here are a Few Highlights:</h5>
              <ul>
                <li>Full stack erb development</li>
                <li>Interactive Front End as per design</li>
                <li>React</li>
                <li>Building REST API</li>
                <li>Managing Database</li>
              </ul>{" "}
              <div>
                <a href="#contactMe">
                  <button className="btn primary-btn">Hire Me</button>
                </a>
                <a href="resume.pdf" download="Md. Omar Shahariar Resume.pdf">
                  <button className="btn highlighted-btn">Get Resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
