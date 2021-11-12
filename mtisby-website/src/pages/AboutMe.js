import Navbar from "../components/navbar/Navbar";
import Aboutme from "../components/aboutme/Aboutme";
import "../app.css"

function AboutMe() {
    return (
      
        <div className="App">
          <Navbar />
          <div className="sections">
            <Aboutme />
          </div>
        </div>
  
    );
  }
  
  export default AboutMe;