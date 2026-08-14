// Getting all content section
const booksSection = document.querySelector(".books");
const eventsSection = document.querySelector(".events");

// Discussion
const discussionImage = document.querySelector(".discussion-background");
const discussionDate = document.querySelector(".discussion-info .date");
const discussionSubject = document.querySelector(".discussion-info .subject");
const discussionCategory = document.querySelector(".discussion-info .category");
const discussionAuthor = document.querySelector(".discussion-info .author");
const discussionTitle = document.querySelector(".discussion article h4");
const discussionContent = document.querySelector(".discussion article p");


// Daily Content


async function fetchData(jsonPath) {
    try {
        const response = await fetch(jsonPath);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
        
        
    } catch (error) {
        console.error("Error while fetching JSON: " + error)
    }
}

async function displayAllData() {
    try {
        const [booksData, eventsData, discussionsData, dailyContentData, quizData] = await Promise.all([
            fetchData("./data/books.json"),            
            fetchData("./data/events.json"),            
            fetchData("./data/community.json"),            
            fetchData("./data/daily.json"),            
            fetchData("./data/quiz.json")
        ]);

        displayBooks(booksData.books);
        displayEvents(eventsData.events);
        displayRecentDiscusion(discussionsData.discussions);
        displayDailyContent(dailyContentData);
        displayRandomQuiz(quizData.quizzes);

    } catch (error) {
        console.error("Error while rendering data: " + error);
        
    }
}


function displayBooks(booksArray) {
    let presentedBookCount = 0;
    for (const book of booksArray) {
        if (presentedBookCount <= 4) {
            const bookBlock = document.createElement("article");
            const bookImage = document.createElement("img");
            const bookInfo = document.createElement("div");
            const bookLink = document.createElement("a");
    
            // Set the image
            bookImage.src = book["image"];
            bookImage.alt = `${book["field"]}: ${book["title"]} by ${book["author"]}`;
            bookImage.width = 400;
            bookImage.loading = "lazy";
    
            // Book information
            bookInfo.innerHTML = `<h3>${book["title"]}</h3>${book["description"]}`;
    
            // Link to the book
            bookLink.href = `./catalog/books.html#${book["id"]}`;
            bookLink.textContent = "Reserve this Book";
    
            // Add everything together
            bookBlock.appendChild(bookImage);
            bookBlock.appendChild(bookInfo);
            bookBlock.appendChild(bookLink);
            booksSection.appendChild(bookBlock);
            presentedBookCount++;
        }
    }
}

function displayEvents(eventsArray){
    for (const [index, event] of eventsArray.entries()) {
        // creating all nodes
        const eventBlock = document.createElement("div");
        const eventImage = document.createElement("img");
        const eventOverlay = document.createElement("div");
        const eventDate = document.createElement("span");
        const eventTitle = document.createElement("h4");
        const eventDescription = document.createElement("p");
        const buttonsBox = document.createElement("div");
        const primaryButton = document.createElement("a");
        const secondaryButton = document.createElement("a");

        eventBlock.classList.add("event-card");
        
        if (index == 0) {
            eventBlock.classList.add("active");
        }
        
        eventImage.src = event["image"];
        eventImage.alt = `Image describing the ${event["name"]} Event about ${event["category"]}`
        eventImage.loading = "lazy";
        eventImage.width = 600;

        eventOverlay.classList.add("event-overlay");
        eventDate.classList.add("event-date");
        eventDate.textContent = event["date"];

        eventTitle.textContent = event["name"];
        eventDescription.textContent = event["description"];

        buttonsBox.classList.add("buttons-box");
        primaryButton.href = `./events.html#${event["id"]}`;
        primaryButton.classList.add("primary-button");
        primaryButton.classList.add("button");
        primaryButton.textContent = "Participate?"
        buttonsBox.appendChild(primaryButton);

        secondaryButton.href = `./events.html}`;
        secondaryButton.classList.add("secondary-button");
        secondaryButton.classList.add("button");
        secondaryButton.textContent = "More Events"
        buttonsBox.appendChild(secondaryButton);
        
        eventOverlay.appendChild(eventDate);
        eventOverlay.appendChild(eventTitle);
        eventOverlay.appendChild(eventDescription);
        eventOverlay.appendChild(buttonsBox);

        eventBlock.appendChild(eventImage);
        eventBlock.appendChild(eventOverlay);

        eventsSection.appendChild(eventBlock);
    }

    const createdEvent = new CustomEvent('eventsCardLoaded');
    document.dispatchEvent(createdEvent);
}

function displayRecentDiscusion(discussionsList) {
    const discussion = discussionsList[0];
    
    discussionImage.src = discussion["image"];
    discussionTitle.textContent = discussion["title"];
    discussionAuthor.textContent = discussion["author"];
    discussionSubject.textContent = discussion["subject"];
    discussionCategory.textContent = discussion["category"];
    discussionDate.textContent = discussion["date"];
    discussionContent.textContent = discussion["text"];
}

function displayDailyContent(dailyContentPromise) {
    const formulasList = dailyContentPromise["formulas"];
    const quotesList = dailyContentPromise["quotes"];
    const dailyRandomizer = localStorage.getItem("todayDailyInfo");

    let formulaIndex = Math.floor(dailyRandomizer["formula"] * formulasList.length);
    let quoteIndex = Math.floor(dailyRandomizer["quote"] * quotesList.length);

    const formula = formulasList[formulaIndex];
    const quote = quoteList[quoteIndex];


}

function displayRandomQuiz(quizzesArray) {
    
}

fetchData("./data/books.json");

document.addEventListener("DOMContentLoaded", displayAllData)