import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Blog from "./Components/Blog/Blog";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";

import Home from "./Components/Home/Home";
import Project from "./Components/Projects/Project";
import Resume from "./Components/Resume/Resume";
import NavBar from "./Components/Shared/NavBar";
import SingleProject from "./Components/SingleProject/SingleProject";
import HomePage from "./HomePage";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="/single/:id"
          element={<SingleProject></SingleProject>}
        ></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
