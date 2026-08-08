const form = document.querySelector("form");
const selectionInput = document.getElementById("productList");
const productInfo = document.getElementById("productInfo");

function addProductToSelection(product) {
    const productName = product.name;
    const optionValue = product.id;

    const productOption = new Option(productName, optionValue);

    selectionInput.add(productOption);
}

for (const product of products) {
    addProductToSelection(product);
}

selectionInput.addEventListener("change", (e) => {
    const chosenProductId = e.target.value;
    
    const actualProduct = products.find((product) => chosenProductId == product.id);

    // build the info using DOM nodes to avoid parsing HTML
    productInfo.textContent = "Average Rating: ";
    const strong = document.createElement('strong');
    strong.textContent = actualProduct.averagerating;
    productInfo.appendChild(strong);
});

form.addEventListener("submit", (e) => {
    let reviewCount = localStorage.getItem("completedReviews") || 0;
    reviewCount++;
    localStorage.setItem("completedReviews", reviewCount.toString());
});