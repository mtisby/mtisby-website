const debugging = true;

const projectsContainer = document.querySelector('#projectsContainer');
const projectsToDisplay = 4;
const projects = {
    projectOne: {
        imgPath: "./projectOne/cheFlavor.png",
        title: "CheFlavor",
        webLink: "",
        repoLink: ""
    },
    projectTwo: {
        imgPath: "./projectTwo/javaScriptCalendar.png",
        title: "JavaScript Calendar",
        webLink: "",
        repoLink: "https://github.com/mtisby/JavaScript-Components"
    },
    projectThree: {
        imgPath: "./projectThree/signum.png",
        title: "Signum", 
        webLink: "https://ismatullaevash.github.io/signum/#/",
        repoLink: "https://github.com/ismatullaevash/signum"
    },
    projectFour: {
        imgPath: "./projectFour/museumOfMini.png",
        title: "Museum Of Miniatures", 
        webLink: "",
        repoLink: "https://github.com/mtisby/museumofMiniatures"
    }
}
const projectTitle = Object.keys(projects);

if (debugging === true){
    console.log(projects)
}

function makeProjectContainer(imgPath, projectTitle, webLink, repoLink ) {
    // create elements
    const projectDiv = document.createElement('div');

    const projectImg = document.createElement('img');
    projectImg.src = imgPath

    const header = document.createElement('h1');
    header.innerText = projectTitle;

    const websiteButton = document.createElement('button');
    websiteButton.innerText = "website";
    websiteButton.addEventListener("click", function(){
        document.location.href = webLink;
    });

    const repoButton = document.createElement('button');
    repoButton.innerText = "repository"
    repoButton.addEventListener("click", function(){
        document.location.href = repoLink;
    });
    
    // add classlist
    projectDiv.classList;
    projectDiv.classList.add('projectDiv');
    header.classList;
    header.classList.add('projectHeader');
    projectImg.classList;
    projectImg.classList.add('projectImg');
    websiteButton.classList;
    websiteButton.classList.add('projectButtons');
    repoButton.classList;
    repoButton.classList.add('projectButtons');

    // add to container
    projectDiv.appendChild(header);
    projectDiv.appendChild(projectImg);
    projectDiv.appendChild(websiteButton);
    projectDiv.appendChild(repoButton);
    projectsContainer.appendChild(projectDiv);
}

for (var i = 0; i < projectsToDisplay; i++) {
    let currentProj = projects[projectTitle[i]];
    let imgPath = currentProj["imgPath"];
    let projTitle = currentProj["title"];
    let webLink = currentProj["webLink"];
    let repoLink = currentProj["repoLink"];

    makeProjectContainer(imgPath, projTitle, webLink, repoLink);
}

