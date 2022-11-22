let mode = "dark"
let lightToggle = document.getElementById("sun");
let darkToggle = document.getElementById("moon");
let active = darkToggle;
let notActive = lightToggle;

elements = document.getElementsByClassName("dark-toggle");

navigation = document.getElementsByClassName("navigation")[0];

if (mode == "light") {
    lightToggle.style.display = "0"
    darkToggle.style.display = "1"
} else if (mode == "dark") {
    darkToggle.style.opacity = "0"
    lightToggle.style.opacity = "1"
}

function Toggle() {
    if (mode == "light") {
        mode = "dark"
        lightToggle.style.opacity = "1"
        darkToggle.style.opacity = "0"

        for (i in elements) {
            elements[i].style.background = "white"
            navigation.style.background = "rgba(255, 255, 255, 0.9)"
        }

    } else if (mode == "dark") {
        mode = "light"
        darkToggle.style.opacity = "1"
        lightToggle.style.opacity = "0"

        for (i in elements) {
            elements[i].style.background = "rgb(30, 30, 30)"
            navigation.style.background = "rgba(30, 30, 30, 0.9)"
        }
    }
}

darkToggle.addEventListener("click", () =>{
    Toggle();
});

lightToggle.addEventListener("click", () =>{
    Toggle();
});



