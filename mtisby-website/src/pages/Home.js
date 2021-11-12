import Navbar from "../components/navbar/Navbar";
import Intro from "../components/intro/Intro";
import Portfolio from "../components/portfolio/Portfolio";
import Source from "../components/source/Source";
import "../app.css"

function App() {
  return (
    
      <div className="App">
        <Navbar />
        <div className="sections">
          <Intro />
          <Portfolio />
          <Source />
        </div>
      </div>

  );
}

export default App;
