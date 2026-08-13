const navIcon = document.querySelector(".nav-icon");
const navList = document.querySelector("header nav");

navIcon.addEventListener("click", (e) => {
    navIcon.classList.toggle("open");
    navList.classList.toggle("active");
});

const navLinks = navList.querySelectorAll('a');
navLinks.forEach(link => {
    
    link.addEventListener('click', () => {
        
        navList.classList.remove('active');
        navIcon.classList.remove('open');
    });
});

document.addEventListener('click', (event) => {
    const isClickInsideNav = navList.contains(event.target);
    const isClickOnToggle = navIcon.contains(event.target);

    if (!isClickInsideNav && !isClickOnToggle && navList.classList.contains('active')) {
        navList.classList.remove('active');
        navIcon.classList.remove('open');
    }
});