import React from 'react'
import "./resume.css"

const Resume = () => {
    return (
        <div className="resume">
            <div className="divLeft">
                <div className="divLeft-Color">
                    <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636672805/portfolio/picture_zb5vbf.jpg" alt="mtisby-profile" />
                    <h1>My Stack</h1>
                    <div className="myStack-Resume">
                        <p>JavaScript, React.js, Node.js, Express.js, Python, MongoDB</p>
                    </div>
                    <div className="email">
                        <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636750208/portfolio/email-icon-1_zqb8d3.png" alt="email-logo"/>
                        <div className="email-link">
                            <p><a href="mailto: mtisby@uci.edu">mtisby@uci.edu</a></p>
                        </div>
                    </div>
                </div>

                <button><a href="https://docs.google.com/document/d/1BVQTIlIHhvjXhMXVxH7-L1vTFLRkhV4bye12D-nbcGc/edit?usp=sharing" download="mtisby-resume">Download the pdf</a></button>

            </div>
            <div className="divRight">
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vQHfCDoO84b41j0RgmsYa13Psof1XKl-8_WKuL9KRlxnw5ZB3e03ZBVuoT--a39nsXbP_YrhTxYiJCP/pub?embedded=true" title="resume"></iframe>
            </div>

        </div>
    )
}

export default Resume
