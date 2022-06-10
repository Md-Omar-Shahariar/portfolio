import React from "react";
import "./Profile.css";
import Typical from "react-typical";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent ">
        <div className="profile-details">
          <div className="cols">
            <div className="cols-icon">
              <a
                className=""
                href="https://www.facebook.com/omar.shahariar.afrid"
                target="_blank"
              >
                <i className="  fa fa-facebook-square"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/md-omar-shahariar-6045a6146/"
                target="_blank"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/Md-Omar-Shahariar" target="_blank">
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'M{" "}
              <span className="highlighted-text">Md. Omar Shahariar</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "MERN STACK DEVELOPER 😎",
                    1000,
                    "Full Stack Developer 😁",
                    1000,

                    "React Dev 😃",
                    1000,
                  ]}
                ></Typical>
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations{" "}
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me</button>
            <a href="resume.pdf" download="Md. Omar Shahariar Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
