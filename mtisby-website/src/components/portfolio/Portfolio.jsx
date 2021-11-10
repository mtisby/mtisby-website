import './portfolio.css'

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <h1 className="portfolioHeader">Projects</h1>
            <div className="projects">
                <div className="projectsContainer" id="projectsContainer">
                    <div className="projectDiv">
                        <h1 className="projectHeader">Cheflavor</h1>
                        <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636578248/portfolio/cheflavor_nfrbox.gif" alt="cheflavor website gif" />
                        <button className="projectButtons">website</button>
                        <button className="projectButtons">repository</button>
                    </div>
                    <div className="projectDiv">
                        <h1 className="projectHeader">Star Campsites</h1>
                        <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636578246/portfolio/Star_Campsites_yruvvz.gif" alt="star campsites website gif" />
                        <button className="projectButtons">website</button>
                        <button className="projectButtons">repository</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
