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

// temples display

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Paris France",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-france-temple-exterior-1905503.jpg"
  },
  {
    templeName: "Sydney Australia",
    location: "Carlingford, New South Wales, Australia",
    dedicated: "1984, September, 20",
    area: 30067,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sydney-australia/400x250/sydney-australia-temple-lds-988492-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Roma, Italy",
    dedicated: "2019, March, 12",
    area: 41010,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/1-Rome-Temple-2160936.jpg"
  },
  {
    templeName: "Kirtland",
    location: "Kirtland, Ohio, United States",
    dedicated: "1836, March, 27",
    area: 15000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/kirtland-temple/kirtland-temple-72068.jpg"
  },
];

const oldTemples = temples.filter((temple) => temple.dedicated.split(", ")[0] <= 1900);

const newTemples = temples.filter((temple) => temple.dedicated.split(", ")[0] >= 2000);

const largeTemples = temples.filter((temple) => temple.area >= 90000);
const smallTemples = temples.filter((temple) => temple.area <= 10000);

const highLCP = ["Yigo Guam", "Manti Utah", "Payson Utah", "Aba Nigeria"]

const cardContainer = document.querySelector("#cards-container");

function displayListOfTemples(templesList){
    for (temple of templesList){
        const figure = document.createElement("figure");
        const heading = document.createElement("h3");
        const templeImage = document.createElement("img");
        const locationInfo = document.createElement("p");
        const dedicationInfo = document.createElement("p");
        const sizeInfo = document.createElement("p");
    
        locationInfo.innerHTML = `<span class="label">Location: </span> ${temple.location}`;
        dedicationInfo.innerHTML = `<span class="label">Dedicated: </span> ${temple.dedicated}`;
        sizeInfo.innerHTML = `<span class="label">Size: </span> ${temple.area} sq ft`;
    
        templeImage.setAttribute("src", temple.imageUrl);
        templeImage.alt = temple.templeName + " Temple";
        templeImage.loading = "lazy";
        templeImage.width = 400;
        templeImage.height = 250;
        if (highLCP.includes(temple.templeName)){
            templeImage.fetchPriority = "high";
            templeImage.loading = "eager";

        }
    
        heading.textContent = temple.templeName;
    
        figure.appendChild(heading);
        figure.appendChild(locationInfo);
        figure.appendChild(dedicationInfo);
        figure.appendChild(sizeInfo);
        figure.appendChild(templeImage);
        cardContainer.appendChild(figure);
    }
}

function removeCards(){
    cardContainer.replaceChildren();
}

document.getElementById("home").addEventListener("click", (e)=> {
    removeCards();
    displayListOfTemples(temples);
});

document.getElementById("old").addEventListener("click", (e)=> {
    removeCards();
    displayListOfTemples(oldTemples);
});

document.getElementById("new").addEventListener("click", (e)=> {
    removeCards();
    displayListOfTemples(newTemples);
});

document.getElementById("large").addEventListener("click", (e)=> {
    removeCards();
    displayListOfTemples(largeTemples);
});

document.getElementById("small").addEventListener("click", (e)=> {
    removeCards();
    displayListOfTemples(smallTemples);
});

displayListOfTemples(temples);