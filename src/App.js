import "./App.css";
import Home from "./components/Home/Home"
import About from "./components/About/About";
import Resume from "./components/Resume/resume";

function App() {
  return (
    <>
      <div className='pattern'>
        <Home />
        <About />
        <Resume />
      </div>
    </>
  );
}

export default App;
