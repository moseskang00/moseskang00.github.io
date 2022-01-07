import "./App.css";
import Home from "./components/Home/Home"
import About from "./components/About/About";
import Resume from "./components/Resume/resume";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <div className='pattern'>
        <Home />
        <About />
        <Resume />
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App;
