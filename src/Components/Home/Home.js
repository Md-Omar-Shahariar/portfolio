import React from "react";
import HomeFooter from "./Footer/HomeFooter";
import Profile from "./Profile";
import "./Home.css";
import Project from "../Projects/Project";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <Profile></Profile>
      <HomeFooter></HomeFooter>
    </div>
  );
};

export default Home;
