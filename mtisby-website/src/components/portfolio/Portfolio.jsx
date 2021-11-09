import './portfolio.css'

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <div className="projectsContainer">
                <div className="project">
                    <h1>Title</h1>
                    
                    <p>description</p>
                </div>

                <div className="project">
                    <h1>Title</h1>
                  
                    <p>description</p>
                </div>

                <div className="project">
                    <h1>Title</h1>
                    
                    <p>description</p>
                </div>
            </div>

            <div className="smallProjects">
                <div className="project">
                    <h1>mini project</h1>
                    
                    <p>description</p>
                </div>
                <div className="project">
                    <h1>mini project</h1>
                    
                    <p>description</p>
                </div>
                <div className="project">
                    <h1>mini project</h1>
                    
                    <p>description</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
