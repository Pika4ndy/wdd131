const input = document.getElementById('favchap');
const btn = document.querySelector('button[type="submit"]');
const chapUl = document.getElementById('list');
const footer = document.querySelector("footer");

let chaptersArray = getChapterList() || [];
chaptersArray = chaptersArray.filter(item => item && item.trim() !== "");

function displayList(item) {
    const chapter = item.trim();

    if (!chapter) {
        return;
    }

    footer.textContent = "";
    let newChap = document.createElement('li');
    let removeBtn = document.createElement('button');

    newChap.textContent = chapter;
    removeBtn.textContent = "❌";
    removeBtn.ariaLabel = "Delete " + chapter;

    removeBtn.addEventListener('click', () => {
        newChap.remove();
        deleteChapter(chapter);
        input.focus();
    });

    newChap.appendChild(removeBtn);
    chapUl.appendChild(newChap);

    footer.innerHTML = `<strong>${chapter}</strong> has been added`;
    footer.style.color = "green";
}

function deleteChapter(chapter) {
    const chapterToRemove = chaptersArray.findIndex((value) => value == chapter);

    chaptersArray.splice(chapterToRemove, 1);
    setChapterList(chaptersArray);
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("MyFavBOMList"));
}

function setChapterList(newChaptersList) {
    localStorage.setItem("MyFavBOMList", JSON.stringify(newChaptersList));
}

btn.addEventListener('click', (e) => { // Adding a list
    e.preventDefault();
    const chapter = input.value.trim();

    if (chaptersArray.length >= 10) {
        footer.style.color = "red";
        footer.textContent = "You already have 10 chapters";
        return;
    }

    if (chaptersArray.includes(chapter)) {
        footer.textContent = "Already in the list!";
        footer.style.color = "black";
    }

    if (chapter !== "") {
        displayList(chapter);
        chaptersArray.push(chapter);
        setChapterList(chaptersArray);
        input.value = "";
        input.focus();
    }
});

input.addEventListener("keyup", (e) => {
    if (e.key == "Enter" && document.activeElement == input) {
        btn.click();
    }
});

chaptersArray.forEach(chapter => {
    displayList(chapter);
});