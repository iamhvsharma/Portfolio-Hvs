import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import { FaAngleDoubleDown } from "react-icons/fa";
import ToolKit from "./components/ToolKit";
import Footer from "./components/Footer";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Communities from "./components/Communities";

const App = () => {
  return (
    <div>
      <Hero />
      

      <AboutMe />
      <Experiences />
      <Projects />
      <Communities />
      {/* <ToolKit /> */}
      <Footer />
    </div>
  );
};

export default App;
