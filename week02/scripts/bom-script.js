const input = document.getElementById('favchap');
const btn = document.querySelector('button[type="submit"]');
const chapUl = document.getElementById('list');
const footer = document.querySelector("footer");

function addNewChapter (event) {
    event.preventDefault();
    if (chapUl.childElementCount >= 10) {
        footer.style.color = "black";
        footer.textContent = "You have already your top 10!";
        return ;
    }
    let presentBook = [];
    for (let child of chapUl.children) {
        presentBook.push(child.firstChild.data)
    }

    console.log(presentBook);

    if (input.value.trim() == "") {
            footer.textContent = "Do not leave empty!";
            footer.style.color = "red";
    } else if (presentBook.includes(input.value.trim())) {
        footer.textContent = "Already in the list";
        footer.style.color = "black";
    } else {
        footer.textContent = "";
        let newChap = document.createElement('li');
        let removeBtn = document.createElement('button');
            
        newChap.textContent = input.value;
        removeBtn.textContent = "❌";
            removeBtn.ariaLabel = "Delete " + newChap.textContent;
            
            removeBtn.addEventListener('click', () => {
                newChap.remove();
            });
            
            newChap.appendChild(removeBtn);
                
            chapUl.appendChild(newChap);
            footer.innerHTML = `<strong>${input.value}</strong> has been added`;
            footer.style.color = "green";
    }
    input.value = "";
    input.focus();
}

btn.addEventListener('click', addNewChapter);
input.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        btn.click();
    }
});