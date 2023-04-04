import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="">
      <AnimatedCursor
        innerSize={8}
        outerSize={16}
        color="12, 158, 234"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={4}       
      />
      <Navbar />
      <Home />
      <About />
      <Work />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
