const today = new Date();
const year = today.getFullYear();



const copyrightYearContainer = document.getElementById("currentyear");


copyrightYearContainer.textContent = year;

document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

// Hamburger menu handling

const menuBtn = document.getElementById("menu");
const nav = document.querySelector("header nav");

menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    menuBtn.classList.toggle("show");
    nav.classList.toggle("show");
})