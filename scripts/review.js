let completedReviews = localStorage.getItem("completedReviews") || 0;
const urlParams = new URLSearchParams(window.location.search);

const productId = urlParams.get("product");
const givenRating = urlParams.get("stars");
const installationDate = urlParams.get("date");
const review = urlParams.get("review");
const username = urlParams.get("name");

let featuresList = ["durability", "performance", "ease", "design"];
let checkedFeatures = [];
let featuresConvertion = {
    "durability": "Durability",
    "performance": "Performance",
    "ease": "Ease of Use",
    "design": "Design"
};

for (const entry of urlParams.entries()) {
    if (featuresList.includes(entry[0])) {
        checkedFeatures.push(entry[0]);
    }
    
}

const countDisplay = document.getElementById("reviewCount");
const productNameDisplay = document.getElementById("productName");
const nameDisplay = document.getElementById("username");

countDisplay.textContent = completedReviews;

const actualProduct = products.find((product) => product.id == productId);

nameDisplay.textContent = username;

productNameDisplay.textContent = actualProduct.name;

// Showing the review
const starsDisplay = document.getElementById("starsDisplay");
const dateDisplay = document.getElementById("dateDisplay");
const featuresDisplay = document.getElementById("featuresDisplay");

const reviewDisplay = document.getElementById("additionalReview");
const reviewComment = document.getElementById("reviewComment");

const formattedDate = new Date(installationDate);

starsDisplay.textContent = givenRating;
dateDisplay.textContent = formattedDate.toDateString();

if (checkedFeatures.length > 0) {
    for (const feature of checkedFeatures) {
        featuresDisplay.textContent += featuresConvertion[feature];

        if (!(checkedFeatures.findIndex(x => x == feature) == checkedFeatures.length - 1)) {
            featuresDisplay.textContent += ", ";
        }
    }
} else {
    featuresDisplay.textContent = "None";
}

if (review != "") {
    reviewComment.textContent = review;
} else {
    reviewDisplay.style.display = "none";
}