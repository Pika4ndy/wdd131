const navIcon = document.querySelector(".nav-icon")

navIcon.addEventListener("click", (e) => {
    navIcon.classList.toggle("open");
    console.log("Menu Hamburger clicked!");
    
});