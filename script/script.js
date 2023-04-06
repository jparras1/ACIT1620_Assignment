// target dark theme button
const darkthemeButton = document.querySelector(".dark-theme");
// target the sidebar and the textarea
const mySidebar = document.querySelector("body > nav");
const textArea = document.querySelector("textarea");

// function for toggling dark mode
function darkMode (event) {
    // toggle the dark mode for the sidebar and textarea
    mySidebar.classList.toggle("nav-dark-mode");
    textArea.classList.toggle("nav-dark-mode");
    textArea.classList.toggle("white-font");
    
    // toggle the dark mode for the body
    document.body.classList.toggle("dark-mode");

    // change the text of the button depending on the current mode
    if (event.target.tagName === "BUTTON" && darkthemeButton.textContent === "Dark Theme") {
        darkthemeButton.textContent = "Light Theme";
    } else {
        darkthemeButton.textContent = "Dark Theme";
    }
}
darkthemeButton.addEventListener("click", darkMode);

// target the cancel and save buttons as well as the textarea
const cancelButton = document.querySelector(".cancel");
const saveButton = document.querySelector(".save");

// function for hiding the cancel and save buttons as well as the textarea box
function hideTextArea () {
    // toggle the hide and show classes when class button is clicked
    cancelButton.classList.toggle("hide");
    textArea.classList.toggle("hide");
    saveButton.classList.toggle("hide");

    cancelButton.classList.toggle("show");
    textArea.classList.toggle("show");
    saveButton.classList.toggle("show");
}
cancelButton.addEventListener("click", hideTextArea)

// target the new note button
const newNoteButton = document.querySelector(".new-note");

// function for new note
function newNoteFunc () {
    // if the save and cancel buttons as well as the textarea box are hidden,
    // pressing the new note button will show them
    if ((cancelButton.classList.contains("hide")) &&
        (textArea.classList.contains("hide")) &&
        (saveButton.classList.contains("hide"))) {

            cancelButton.classList.toggle("hide");
            textArea.classList.toggle("hide");
            saveButton.classList.toggle("hide");

            textArea.value = "This is a placeholder";
    }
    // if the new note button is pressed even though the save and cancel as well
    // as the textarea box is showing, clear the textarea box content
    else {
        textArea.value = "";
    }
}
newNoteButton.addEventListener("click", newNoteFunc)

// create the array for the 'default' notes
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

// target the sidebar ul list
let noteList = document.querySelector("nav > ul");

// function for the saving the note
function addNote () {
    // if the textarea box has a value, then do the following:
    if (textArea.value !== "") {
        // prompt the user for the title of the note
        newNoteTitle = prompt("Please enter a title for your note: ");
        if (newNoteTitle !== null) {
            // push the new content to the noteArray
            noteArray.push (
                {
                    title: newNoteTitle,
                    body: textArea.value
                }
            );
            // create the new li element
            var newList = document.createElement("li");
            // append the new li element to the ul element
            noteList.appendChild(newList);
            // create the button element (that's inside the created li)
            newListItem = document.createElement("button");
            // the new button element will have the text equivalent to the user title
            newListItem.textContent = newNoteTitle;
            // add the sidebar-button class to the new button
            newListItem.classList.add("sidebar-button");
            // append the new button element to the new li element
            newList.appendChild(newListItem);
        }
    }
}
saveButton.addEventListener("click", addNote)

// function for displaying the note to the textarea box
function displayNote (event) {
    // use event.target to take advantage of event bubbling
    if (event.target.tagName === "BUTTON") {
        // search the noteArray if it matches the clicked note title
        for (let item of noteArray) {
            if (event.target.textContent === item["title"]) {
                // if the match was found, display the note content to the textarea box
                textArea.value = item["body"];
            }
        }
    }
}
noteList.addEventListener("click", displayNote)