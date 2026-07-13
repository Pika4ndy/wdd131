const today = new Date();
const year = today.getFullYear();

const birthday = new Date(2008, 9, 7);

try {
    
    const ageContainer = document.getElementById("ageCalculation");
    let currentAge = year - birthday.getFullYear();
    ageContainer.textContent = currentAge;
} catch (error) {
    console.log("This is not a page where I calculate my age")
}

const copyrightYearContainer = document.getElementById("currentyear");


copyrightYearContainer.textContent = year;

document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;