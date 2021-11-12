import Navbar from "../components/navbar/Navbar";
import Resume from "../components/resume/Resume";
import "../app.css"

function ResumePg() {
    return (
      
        <div className="App">
          <Navbar />
          <div className="sections">
              <Resume />
          </div>
        </div>
  
    );
  }
  
  export default ResumePg;