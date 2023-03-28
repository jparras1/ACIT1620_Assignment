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

function hideTextArea (event) {
    
}

cancelButton.addEventListener("click", hideTextArea)