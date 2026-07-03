const today = new Date();
const year = today.getFullYear();

const birthday = new Date(2008, 9, 7);

const ageContainer = document.getElementById("ageCalculation");
const copyrightYearContainer = document.getElementById("currentyear");

let currentAge = year - birthday.getFullYear();

ageContainer.textContent = currentAge;
copyrightYearContainer.textContent = year;

document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;