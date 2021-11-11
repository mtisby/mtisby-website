import "./contact.css"

const Contact = () => {
    return (
        <div className="contact">
            <h1>contact me</h1>
            <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636672805/portfolio/picture_zb5vbf.jpg" alt="Mariel" />
            <p>email: mtisby@uci.edu</p>
            <div className="social-media">
                <div><a href="https://www.linkedin.com/in/mtisby/"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636572083/portfolio/linkedin-logo_olfiee.png" alt="linkedin" /></a></div>
                <div><a href="https://github.com/mtisby"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636572083/portfolio/github-logo_aeqwnl.png" alt="github" /></a></div>
            </div>
        </div>
    )
}

export default Contact
