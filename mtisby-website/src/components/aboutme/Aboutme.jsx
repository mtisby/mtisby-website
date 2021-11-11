import React from 'react'
import "./aboutme.css"

const Aboutme = () => {
    return (
        <div>
            <div className="Intro">
                <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636672805/portfolio/picture_zb5vbf.jpg" alt="Mariel-Tisby" />
                <h1>Mariel Tisby</h1>
                <p>Full Stack Developer</p>
            </div>
            <div>
                <div className="divLeft">
                    <div className="myStack">
                        <h3>
                            My Stack
                        </h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>React.js</li>
                            <li>Python</li>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>
                <div className="divRight">
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
        </div>
    )
}

export default Aboutme
