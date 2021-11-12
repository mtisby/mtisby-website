import Navbar from "../components/navbar/Navbar";
import Resume from "../components/resume/Resume";
import "../app.css"

function ResumePg() {
    return (
      
        <div className="App">
          <Navbar />
          <div className="sections">
              <Resume />
              <h1>hello?</h1>
          </div>
        </div>
  
    );
  }
  
  export default ResumePg;