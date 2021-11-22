import './portfolio.css'

const Portfolio = () => {
    const projectGifs = {
        "star-campsites": "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636654003/portfolio/Star_Campsites_uliupa.gif",
        "cheflavor": "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636655757/portfolio/cheflavor_banyqt.gif",
        "js-calendar": "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636658371/portfolio/js-calenfdar_auidpm.gif",
        "signum": "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636659040/portfolio/signum_oslci3.gif",
        "cheflavor-staffportal": "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636855482/portfolio/cheflavor-staffportal_ijllwa.gif",
        "poodle-doodle": "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1637555977/paint-app/Poodle_Doodle_-_Google_Chrome_2021-11-21_20-21-49_SparkVideo_1_x0u3jj.gif"
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
            <h1 className="portfolioHeaderh1">My Stack</h1>
            <div className="myStack">
                <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636756690/portfolio/logos/github-logo_lzcuqe.png" alt="github-logo" />
                <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636756692/portfolio/logos/javascript-logo_ccplff.svg" alt="js-logo" />
                <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636756694/portfolio/logos/nodejs-logo_ohziem.png" alt="nodejs-logo" />
                <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636756696/portfolio/logos/express-routing-logo_iwpb6y.png" className="express" alt="express-logo" />
                <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636756698/portfolio/logos/python-logo_fzoyn9.png" alt="python-logo" />
                <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636756700/portfolio/logos/linux-logo_cn6qiw.png" alt="linux-logo" />
                <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636756702/portfolio/logos/react-logo_qsqhgf.png" alt="react-logo" />
                <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636756704/portfolio/logos/visual-studio-code-logo_yoai3t.png" alt="vs-code-logo" />
                <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636756706/portfolio/logos/terminal-logo_jwxwmc.png" alt="terminal-logo" />
                <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636757918/portfolio/logos/mongodb_ng1uxj.png" className="express" alt="mongodb-logo" />
            </div>
            <h1 className="portfolioHeaderh1">Projects</h1>
            <div className="projects">
            <div className="projectDiv">
                    <h1 className="projectHeader">Poodle Doodle</h1>
                <img onMouseEnter={handleHoverEnter} onMouseLeave={ handleHoverLeave } src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1637557563/paint-app/poodle-doodle_gkby0l.png" alt="poodle doodle website gif" id="poodle-doodle"/>
                    <div className="buttonDiv">
                        <button className="projectButtons"><a href="https://pacific-bastion-50258.herokuapp.com/">website</a></button>
                        <button className="projectButtons"><a href="https://github.com/mtisby/paint-app">repository</a></button>
                    </div>
                </div>
                <div className="projectDiv">
                    <h1 className="projectHeader">Cheflavor</h1>
                    <img onMouseEnter={handleHoverEnter} onMouseLeave={ handleHoverLeave } src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636656191/portfolio/cheflavor_dzfi1a.png" alt="cheflavor website gif" id="cheflavor"/>
                    <div className="buttonDiv">
                        <button className="projectButtons"><a href="https://protected-scrubland-89262.herokuapp.com/cheflavor">website</a></button>
                        <button className="projectButtons"><a href="https://github.com/mtisby/cheflavor">repository</a></button>
                    </div>
                </div>
                <div className="projectDiv">
                    <h1 className="projectHeader">Cheflavor Staff Portal</h1>
                    <img onMouseEnter={handleHoverEnter} onMouseLeave={ handleHoverLeave } src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636855473/portfolio/staff-portal_owyzce.png" alt="cheflavor-website-gif" id="cheflavor-staffportal"/>
                    <div className="buttonDiv">
                        <button className="projectButtons"><a href="https://protected-scrubland-89262.herokuapp.com/cheflavor/stafflogin/login">website</a></button>
                        <button className="projectButtons"><a href="https://github.com/mtisby/cheflavor">repository</a></button>
                    </div>
                </div>
                <div className="projectDiv">
                    <h1 className="projectHeader">Star Campsites</h1>
                <img onMouseEnter={handleHoverEnter} onMouseLeave={ handleHoverLeave } src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636656190/portfolio/star-campsites_veouus.png" alt="star campsites website gif" id="star-campsites"/>
                    <div className="buttonDiv">
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
                    <div className="buttonDiv">
                        <button className="projectButtons"><a href="https://mtisby.github.io/javascript-calendar/">website</a></button>
                        <button className="projectButtons"><a href="https://github.com/mtisby/javascript-calendar">repository</a></button>
                    </div>
                </div>
                <div className="projectDiv">
                    <h1 className="projectHeader">Signum</h1>
                <img onMouseEnter={handleHoverEnter} onMouseLeave={ handleHoverLeave } src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636659030/portfolio/signum_yh3yez.png" alt="star campsites website gif" id="signum"/>
                    <div className="buttonDiv">
                        <button className="projectButtons"><a href="https://ismatullaevash.github.io/signum/#/">website</a></button>
                        <button className="projectButtons"><a href="https://github.com/ismatullaevash/signum">repository</a></button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Portfolio
