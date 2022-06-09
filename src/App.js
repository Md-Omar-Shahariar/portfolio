import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import ContactMe from "./Components/ContactMe/ContactMe";

import Home from "./Components/Home/Home";
import Project from "./Components/Projects/Project";
import Resume from "./Components/Resume/Resume";
import NavBar from "./Components/Shared/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Home></Home>
      <AboutMe></AboutMe>
      <Project></Project>
      <Resume></Resume>
      <ContactMe></ContactMe>
    </div>
  );
}

export default App;