let darkthemeButton = document.querySelector(".dark-theme");

function darkMode () {
    const mySidebar = document.querySelector("body > nav");
    const textArea = document.querySelector("textarea")

    mySidebar.classList.remove("nav-light-mode");
    mySidebar.classList.add("nav-dark-mode");
    textArea.classList.remove("nav-light-mode");
    textArea.classList.add("nav-dark-mode");
    
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
}

darkthemeButton.addEventListener("click", darkMode);