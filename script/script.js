let darkthemeButton = document.querySelector(".dark-theme");

function darkMode (event) {
    var mySidebar = document.querySelector("body > nav");
    var textArea = document.querySelector("textarea");

    mySidebar.classList.toggle("nav-light-mode");
    mySidebar.classList.toggle("nav-dark-mode");
    textArea.classList.toggle("nav-light-mode");
    textArea.classList.toggle("nav-dark-mode");
    
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");

    if (event.target.tagName === "BUTTON" && darkthemeButton.textContent === "Dark Theme") {
        darkthemeButton.textContent = "Light Theme";
    } else {
        darkthemeButton.textContent = "Dark Theme";
    }
}
darkthemeButton.addEventListener("click", darkMode);

let cancelButton = document.querySelector(".cancel");
let textAreaBox = document.querySelector("textarea");
let saveButton = document.querySelector(".save");

function hideTextArea () {
    cancelButton.classList.toggle("hide");
    textAreaBox.classList.toggle("hide");
    saveButton.classList.toggle("hide");

    cancelButton.classList.toggle("show");
    textAreaBox.classList.toggle("show");
    saveButton.classList.toggle("show");
}
cancelButton.addEventListener("click", hideTextArea)

let newNoteButton = document.querySelector(".new-note");

function newNoteFunc () {
    if ((cancelButton.classList.contains("hide")) &&
        (textAreaBox.classList.contains("hide")) &&
        (saveButton.classList.contains("hide"))) {

            cancelButton.classList.toggle("hide");
            textAreaBox.classList.toggle("hide");
            saveButton.classList.toggle("hide");
            
            cancelButton.classList.toggle("show");
            textAreaBox.classList.toggle("show");
            saveButton.classList.toggle("show");

            textAreaBox.textContent = "This is a placeholder";
    } else {
        textAreaBox.textContent = "";
    }
}
newNoteButton.addEventListener("click", newNoteFunc)

let noteArray = [
    {
        title:"note one",
        body:"this is my first note"
    },
    {
        title:"note two",
        body: "my second note"
    }
]

function addNote () {
    if (textAreaBox.value !== "") {
        newNoteTitle = prompt("Please enter a title for your note: ");
        noteArray.push (
            {
                title: newNoteTitle,
                body: textAreaBox.value
            }
        );
        var noteList = document.querySelector("nav > ul");
        var newList = document.createElement("li");
        newList.textContent = newNoteTitle;
        noteList.appendChild(newList);
    }
}

saveButton.addEventListener("click", addNote)