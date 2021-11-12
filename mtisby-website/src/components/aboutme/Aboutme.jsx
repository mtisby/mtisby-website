import React from 'react'
import "./aboutme.css"

const Aboutme = () => {
    return (
        <div className="aboutme">
            <h1>About Me</h1>
            <div className="aboutmeBanner">
                <div className="divLeft"><img className="profile" src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636672805/portfolio/picture_zb5vbf.jpg" alt="Mariel-Tisby" /></div>
                <div className="divRight">
                    <div className="profileLinks"><img className="logo" src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636750208/portfolio/email-icon-1_zqb8d3.png" alt="email-logo" /><a href="mailto: mtisby@uci.edu">mtisby@uci.edu</a></div>
                    <div className="profileLinks"><img className="logo" src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636572083/portfolio/github-logo_aeqwnl.png" alt="github-logo" /><a href="https://github.com/mtisby">@mtisby</a></div>
                    <div className="profileLinks"><img className="logo" src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636572083/portfolio/linkedin-logo_olfiee.png" alt="linkedin-logo" /><a href="https://www.linkedin.com/in/mtisby/">@mtisby</a></div>
                </div>
            </div>

            <div>
                <div className="description">
                    <p>
                        Hi, my name is Mar and I am a Cognitive scientist turned full stack web developer. With over 5 years of experience using Python and MATLAB for data analysis,
                        I found that my passion lied within building readily accessible tools rather than studying human behavior and anatomy. I used my experience in 
                        in project management, data science, and technical writing and made my transition to development by particpating in Hackathons. I continued to learn by graduating from
                        Colt Steele's Web Developer Bootcamp and volunteered at Coding 4 Community. At Coding 4 Community I build apps and websites for other non-profit organizations.

                        I am passionate about implementing solutions into easily accessible tools to aid in the efficency of technology. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Aboutme
