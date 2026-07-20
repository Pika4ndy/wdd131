// footer text element
const today = new Date();

const year = today.getFullYear();

const copyrightYearContainer = document.getElementById("currentYear");
const lastModifiedContainer = document.getElementById("lastModified");

copyrightYearContainer.textContent = year;
lastModifiedContainer.textContent = `Last Modified: ${document.lastModified}`;

// Wind Chill Calculation
const windChillContainer = document.querySelector(".wind-chill");

let temperature = 10; // degree Celsius
let conditions = "cloudy";
let windSpeed = 8; // km/h
let precipitation = 10; //%

function CalculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.362 * windSpeed + 0.3965 * temperature * windSpeed;
}

let windChill = 0;

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = CalculateWindChill(temperature, windSpeed);
}

windChillContainer.innerHTML = windChill ? Math.round(windChill * 100) / 100 + " &deg;C" : "N / A"