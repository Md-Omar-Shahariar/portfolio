import React from "react";
import AboutMe from "./Components/AboutMe/AboutMe";
import Blog from "./Components/Blog/Blog";
import ContactMe from "./Components/ContactMe/ContactMe";
import Home from "./Components/Home/Home";
import Project from "./Components/Projects/Project";
import Resume from "./Components/Resume/Resume";

const HomePage = () => {
  return (
    <div>
      <Home></Home>
      <AboutMe></AboutMe>
      <Project></Project>
      <Resume></Resume>
      <Blog></Blog>
      <ContactMe></ContactMe>
    </div>
  );
};

export default HomePage;
