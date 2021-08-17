const socialsContainer = document.querySelector('socials');
const linkedinButton = document.querySelector('#linkedin');
linkedinButton.addEventListener("click", function(){
    document.location.href = "https://www.linkedin.com/in/mariel-tisby-5a7a93bb";
});
const githubButton = document.querySelector('#github');
githubButton.addEventListener("click", function(){
    document.location.href = "https://github.com/mtisby";
});
    
const emailButton = document.querySelector('#email');
emailButton.addEventListener("click", function(){
    document.location.href = "./email.html";
});
