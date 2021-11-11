import './portfolio.css'

const Portfolio = () => {
    const projectGifs = {
        "star-campsites": "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636654003/portfolio/Star_Campsites_uliupa.gif",
        "cheflavor": "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636655757/portfolio/cheflavor_banyqt.gif",
        "js-calendar": "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636658371/portfolio/js-calenfdar_auidpm.gif",
        "signum":"https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636659040/portfolio/signum_oslci3.gif"
    }

    const handleHoverEnter = (e) => {
        const newSrc = projectGifs[e.target.id];
        if (newSrc !== '' || newSrc !== undefined) {
            projectGifs[e.target.id] = e.target.src;
            e.target.src = newSrc;
        }
    }

    const handleHoverLeave = (e) => {
        const newSrc = projectGifs[e.target.id];
        if (newSrc !== '' || newSrc !== undefined) {
            projectGifs[e.target.id] = e.target.src;
            e.target.src = newSrc;
        }
    }



    return (
        <div className='portfolio'>
            <h1 className="portfolioHeaderh1">Projects</h1>
            <div className="projects">
                <div className="projectDiv">
                    <h1 className="projectHeader">Cheflavor</h1>
                    <img onMouseEnter={handleHoverEnter} onMouseLeave={ handleHoverLeave } src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636656191/portfolio/cheflavor_dzfi1a.png" alt="cheflavor website gif" id="cheflavor"/>
                    <div>
                        <button className="projectButtons"><a href="https://protected-scrubland-89262.herokuapp.com/cheflavor">website</a></button>
                        <button className="projectButtons"><a href="https://github.com/mtisby/cheflavor">repository</a></button>
                    </div>
                </div>
                <div className="projectDiv">
                    <h1 className="projectHeader">Star Campsites</h1>
                <img onMouseEnter={handleHoverEnter} onMouseLeave={ handleHoverLeave } src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636656190/portfolio/star-campsites_veouus.png" alt="star campsites website gif" id="star-campsites"/>
                    <div>
                        <button className="projectButtons"><a href="https://secure-gorge-90469.herokuapp.com/">website</a></button>
                        <button className="projectButtons"><a href="https://github.com/mtisby/star-campsites">repository</a></button>
                    </div>
                </div>
            </div>


            <h3 className="portfolioHeaderh3">Mini Projects</h3>
            <div className="projects">
                <div className="projectDiv">
                    <h1 className="projectHeader">Events Calendar</h1>
                    <img onMouseEnter={handleHoverEnter} onMouseLeave={ handleHoverLeave } src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636658235/portfolio/js-calendar_brr61d.png" alt="cheflavor website gif" id="js-calendar"/>
                    <div>
                        <button className="projectButtons"><a href="https://mtisby.github.io/javascript-calendar/">website</a></button>
                        <button className="projectButtons"><a href="https://github.com/mtisby/javascript-calendar">repository</a></button>
                    </div>
                </div>
                <div className="projectDiv">
                    <h1 className="projectHeader">Signum</h1>
                <img onMouseEnter={handleHoverEnter} onMouseLeave={ handleHoverLeave } src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636659030/portfolio/signum_yh3yez.png" alt="star campsites website gif" id="signum"/>
                    <div>
                        <button className="projectButtons"><a href="https://ismatullaevash.github.io/signum/#/">website</a></button>
                        <button className="projectButtons"><a href="https://github.com/ismatullaevash/signum">repository</a></button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Portfolio
