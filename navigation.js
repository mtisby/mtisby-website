const menuIcon = document.querySelector('#menuImg');
menuIcon.addEventListener('click', function myFunction() {
    const navbar = document.querySelector('#navUl');
        if (navbar.style.display === "block") {
          navbar.style.display = "none";
        } else {
            navbar.style.display = "block";
        }
      });
