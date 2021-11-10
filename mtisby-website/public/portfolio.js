import React from "react";

const projects = {
    projectOne: {
        imgPath: "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636578248/portfolio/cheflavor_nfrbox.gif",
        title: "CheFlavor",
        webLink: "https://protected-scrubland-89262.herokuapp.com/cheflavor",
        demoLink: "",
        repoLink: "https://github.com/mtisby/cheflavor"
    },
    projectTwo: {
        imgPath: "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636578246/portfolio/Star_Campsites_yruvvz.gif",
        title: "Star Campsites",
        webLink: "https://secure-gorge-90469.herokuapp.com/",
        demoLink: "",
        repoLink: "https://github.com/mtisby/star-campsites"
    }
}


const projectsContainer = React.querySelector('#projectsContainer');
console.log(projectsContainer)

const projectTitle = Object.keys(projects);

function makeProjectContainer(imgPath, projectTitle, webLink, demoLink, repoLink ) {
    // create elements
    const projectDiv = document.createElement('div');

    const projectImg = document.createElement('img');
    projectImg.src = imgPath

    const header = document.createElement('h1');
    header.innerText = projectTitle;

    const websiteButton = document.createElement('button');
    if (webLink === "") {
        websiteButton.innerText = "demo";
        websiteButton.addEventListener("click", function(){
            document.location.href = demoLink;
    });
    } else {
        websiteButton.innerText = "website";
        websiteButton.addEventListener("click", function(){
            document.location.href = webLink;
        });
    }

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

for (var i = 0; i < projectTitle.length; i++) {
    let currentProj = projects[projectTitle[i]];
    let imgPath = currentProj["imgPath"];
    let projTitle = currentProj["title"];
    let webLink = currentProj["webLink"];
    let repoLink = currentProj["repoLink"];
    let demoLink = currentProj["demoLink"];

    makeProjectContainer(imgPath, projTitle, webLink, demoLink, repoLink);

    console.log(i)
}