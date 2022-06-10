import React from "react";
import HomeFooter from "./Footer/HomeFooter";
import Profile from "./Profile";
import "./Home.css";
import Project from "../Projects/Project";

const Home = () => {
  return (
    <div
      className="home-container"
      id="home"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Profile></Profile>
      <HomeFooter></HomeFooter>
    </div>
  );
};

export default Home;
