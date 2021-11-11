import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import "./app.css"

function ContactMe() {
    return (
      
        <div className="App">
          <Navbar />
          <div className="sections">
            <Contact />
          </div>
        </div>
  
    );
  }
  
  export default ContactMe;