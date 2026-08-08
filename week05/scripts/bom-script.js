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

    footer.textContent = "";
    footer.textContent = `${chapter} has been added`;
    footer.style.color = "green";
}

function deleteChapter(chapter) {
    const chapterToRemove = chaptersArray.findIndex((value) => value == chapter);
    if (chapterToRemove === -1) return; // nothing to remove

    chaptersArray.splice(chapterToRemove, 1);
    setChapterList(chaptersArray);
}

function getChapterList() {
    try {
        const raw = localStorage.getItem("MyFavBOMList");
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
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

    if (chapter === "") {
        footer.style.color = "red";
        footer.textContent = "Do not leave empty!";
        return;
    }

    if (chaptersArray.includes(chapter)) {
        footer.textContent = "Already in the list!";
        footer.style.color = "black";
        return;
    }

    displayList(chapter);
    chaptersArray.push(chapter);
    setChapterList(chaptersArray);
    input.value = "";
    input.focus();
});

input.addEventListener("keyup", (e) => {
    if (e.key == "Enter" && document.activeElement == input) {
        btn.click();
    }
});

// initial render: use a fragment to minimize reflows
if (chaptersArray.length) {
    const frag = document.createDocumentFragment();
    chaptersArray.forEach(ch => frag.appendChild(renderChapter(ch)));
    chapUl.appendChild(frag);
}