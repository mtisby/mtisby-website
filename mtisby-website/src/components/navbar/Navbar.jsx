import "./navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left"></div>

            <div className="navbar-center">
                <div>
                    <Link to="/aboutme" className="link">about me</Link>
                </div>
                <div>
                    <Link to="/contactme" className="link">contact me</Link>
                </div>
                <div>
                    <Link to="resume" className="link">resume</Link>
                </div>
            </div>

            <div className="navbar-right">
                <div><a href="https://www.linkedin.com/in/mtisby/"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636572083/portfolio/linkedin-logo_olfiee.png" alt="linkedin" /></a></div>
                <div><a href="https://github.com/mtisby"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636572083/portfolio/github-logo_aeqwnl.png" alt="github" /></a></div>
            </div>
        </div>
    )
}

export default Navbar
