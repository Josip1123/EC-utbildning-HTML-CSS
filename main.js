const darkmodeSwitch = document.querySelector(".darkmode-toggle");
const preferedThemeDark = window.matchMedia("(prefers-color-scheme: dark)").matches;


if (localStorage.getItem("theme") === null && preferedThemeDark) {
    setDarkmode();
} else {
    checkLocalStorageForTheme();
}

function setDarkmode() {
    darkmodeSwitch.checked = true;
    document.body.classList.add("dark-mode");
}

function setLightmode() {
    darkmodeSwitch.checked = false;
    document.body.classList.remove("dark-mode");
}

function checkLocalStorageForTheme() {
    if (localStorage.theme === "dark"){
        setDarkmode();
    } else if (localStorage.theme === "light") {
        setLightmode();
    }
}


function isChecked() {
    if (darkmodeSwitch.checked) {
        setDarkmode();
        localStorage.setItem("theme", "dark");
    } else {
        setLightmode();
        localStorage.setItem("theme", "light");
    }
}

darkmodeSwitch.addEventListener("change", isChecked);