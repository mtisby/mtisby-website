const menuIcon = document.querySelector('#menuImg');
menuIcon.addEventListener('click', function myFunction() {
    const navbar = document.querySelector('#navigation');
        if (navbar.style.visibility === "hidden") {
            navbar.style.visibility = "visible";
        } else {
            navbar.style.visibility = "hidden";
        }
});

const linkedinNav = document.querySelector('#linkedinNav');
linkedinNav.addEventListener("click", function(){
    document.location.href = "https://www.linkedin.com/in/mariel-tisby-5a7a93bb";
});
const githubNav = document.querySelector('#githubNav');
githubNav.addEventListener("click", function(){
    document.location.href = "https://github.com/mtisby";
});
    
const emailNav = document.querySelector('#emailNav');
emailNav.addEventListener("click", function(){
    document.location.href = "./email.html";
});

const resumeNav = document.querySelector('#resumeNav');
resumeNav.addEventListener("click", function(){
    document.location.href = "./email.html";
});
    
    
