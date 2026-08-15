const eventsSection = document.querySelector("section.events");

async function fetchEvents() {
    const response = await fetch("./data/events.json");

    const eventsList = await response.json();
    

    for (const event of eventsList.events) {
        addEventCard(event);
    }
    
}

function addEventCard(eventInfo) {
    const eventContainer = document.createElement("article");
    const eventImage = document.createElement("img");
    const eventInfoContainer = document.createElement("div");
    const eventName = document.createElement("h3");
    const eventDate = document.createElement("span");
    const eventCategory = document.createElement("span");
    const eventDescription = document.createElement("p");

    eventContainer.classList.add("event-card");
    eventContainer.id = eventInfo["id"];

    eventImage.src = eventInfo["image"];
    eventImage.alt = `Event: ${eventInfo["name"]} about ${eventInfo["category"]}, date: ${eventInfo["date"]}`;
    eventImage.loading = "lazy";

    eventInfoContainer.classList.add("event-info");

    eventName.textContent = eventInfo["name"];
    eventInfoContainer.appendChild(eventName);

    eventDate.classList.add("event-date");
    eventDate.textContent = eventInfo["date"];
    eventInfoContainer.appendChild(eventDate);

    eventCategory.classList.add("event-category");
    eventCategory.textContent = eventInfo["category"];
    eventInfoContainer.appendChild(eventCategory);

    eventDescription.textContent = eventInfo["description"];
    eventInfoContainer.appendChild(eventDescription);

    eventContainer.appendChild(eventImage);
    eventContainer.appendChild(eventInfoContainer);

    eventsSection.appendChild(eventContainer);

}

document.addEventListener("DOMContentLoaded", fetchEvents);