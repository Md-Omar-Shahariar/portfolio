import React from "react";
import card1 from "../../assets/card image/card1.png";
import card2 from "../../assets/card image/card2.png";
import card3 from "../../assets/card image/card3.png";
import card4 from "../../assets/card image/card4.png";

const Project = () => {
  return (
    <div id="projects" className=" min-vh-100 container pt-5">
      <h1 className=" text-center aboutme ">Projects</h1>
      <div className="d-flex justify-content-center align-items-center">
        <div className="ml"></div>
        <div className="mi"></div>
        <div className="mr"></div>
      </div>

      <div className="mt-5 ">
        <div className="row ">
          <div
            className="col-lg-4 col-md-6 mb-3"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div class="card  shadow">
              <img
                class="card-img-top w-100"
                src={card1}
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title aboutme">SEA Tech</h4>
                <p class="card-text">
                  <p className="aboutme">Technology:</p>
                  <ul>
                    <li>ReactJS</li>
                    <li>Tailwind CSS</li>
                    <li>ExpressJS</li>
                    <li>MongoDB</li>
                  </ul>
                </p>
                <a
                  href="https://sea-tech-ccadc.web.app/"
                  class="btn primary-btn"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a href="/single/1" class="btn highlighted-btn">
                  Details
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 mb-3"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div class="card   shadow">
              <img
                class="card-img-top w-100"
                src={card2}
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title aboutme">Royal CARS</h4>
                <p class="card-text">
                  <p className="aboutme">Technology:</p>
                  <ul>
                    <li>ReactJS</li>
                    <li>BootStrap CSS</li>
                    <li>ExpressJS</li>
                    <li>MongoDB</li>
                  </ul>
                </p>
                <a
                  href="https://inventory-system-77d91.web.app/"
                  class="btn primary-btn"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a href="/single/2" class="btn highlighted-btn">
                  Details
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 mb-3"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div class="card   shadow">
              <img
                class="card-img-top w-100"
                src={card3}
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title aboutme">Travel Baba</h4>
                <p class="card-text">
                  <p className="aboutme">Technology:</p>
                  <ul>
                    <li>ReactJS</li>
                    <li>BootStrap CSS</li>
                    <li>React-router-dom</li>
                    <li>Firebase</li>
                  </ul>
                </p>
                <a
                  href="https://desi-dhaba-12e5d.web.app/"
                  class="btn primary-btn"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a href="/single/3" class="btn highlighted-btn">
                  Details
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 mb-3"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div class="card   shadow">
              <img
                class="card-img-top w-100"
                src={card4}
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title aboutme">Baby Care</h4>
                <p class="card-text">
                  <p className="aboutme">Technology:</p>
                  <ul>
                    <li>ReactJS</li>
                    <li>Tailwind CSS</li>
                    <li>Custom Link</li>
                    <li>Re-Charts</li>
                  </ul>
                </p>
                <a
                  href="https://babycare-assignment8.netlify.app/"
                  class="btn primary-btn"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a href="/single/4" class="btn highlighted-btn">
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
