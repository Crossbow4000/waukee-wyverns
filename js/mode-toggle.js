let lightToggle = document.getElementById("sun");
let darkToggle = document.getElementById("moon");

elements = document.getElementsByClassName("dark-toggle");

navigation = document.getElementsByClassName("navigation")[0];
eventsTitle = document.getElementsByClassName("events-title")[0];


if ( localStorage.getItem("mode") != "light" && localStorage.getItem("mode") != "dark" ) {
  localStorage.setItem("mode", "light")
}


if ( localStorage.getItem("mode") == "dark")  {
    active = lightToggle;
    notActive = darkToggle;

    localStorage.setItem("mode", "dark")

    for ( let i in elements ) {
      try {
        elements[i].style.background = "white"
      } catch {
        let o = "o"
      }
    }
    navigation.style.background = "rgba(255, 255, 255, 0.9)"
    try {
        eventsTitle.style.color = "rgb(255, 255, 255)"
        eventsTitle.style.background = "none"
    } catch {
        let o = "o"
    }
    try {
      document.getElementById('monday').setAttribute('data-mode', "light")
      document.getElementById('tuesday').setAttribute('data-mode', "light")
      document.getElementById('wednesday').setAttribute('data-mode', "light")
      document.getElementById('thursday').setAttribute('data-mode', "light")
      document.getElementById('friday').setAttribute('data-mode', "light")
      document.getElementById('saturday').setAttribute('data-mode', "light")
      document.getElementById('sunday').setAttribute('data-mode', "light")
    } catch {
        let o = "o"
    }
    } else {
    active = darkToggle;
    notActive = lightToggle;

    localStorage.setItem("mode", "light")

    for ( let i in elements ) {
      try {
        elements[i].style.background = "rgb(30, 30, 30)"
      } catch {
        let o = "o"
      }
    }
    navigation.style.background = "rgba(30, 30, 30, 0.9)"
    try {
        eventsTitle.style.color = "rgb(30, 30, 30)"
        eventsTitle.style.background = "none"
    } catch {
        let o = "o"
    }
    try {
      document.getElementById('monday').setAttribute('data-mode', "dark")
      document.getElementById('tuesday').setAttribute('data-mode', "dark")
      document.getElementById('wednesday').setAttribute('data-mode', "dark")
      document.getElementById('thursday').setAttribute('data-mode', "dark")
      document.getElementById('friday').setAttribute('data-mode', "dark")
      document.getElementById('saturday').setAttribute('data-mode', "dark")
      document.getElementById('sunday').setAttribute('data-mode', "dark")
    } catch {
        let o = "o"
    }

}



active.style.opacity = "1"
notActive.style.opacity = "0"



function Toggle() {
  if ( localStorage.getItem("mode") == "light")  {
    active = lightToggle;
    notActive = darkToggle;

    localStorage.setItem("mode", "dark")

    for ( let i in elements ) {
      try {
        elements[i].style.background = "white"
      } catch {
        let o = "o"
      }
    }
    navigation.style.background = "rgba(255, 255, 255, 0.9)"
    try {
        eventsTitle.style.color = "rgb(255, 255, 255)"
        eventsTitle.style.background = "none"
    } catch {
        let o = "o"
    }
    try {
      document.getElementById('monday').setAttribute('data-mode', "light")
      document.getElementById('tuesday').setAttribute('data-mode', "light")
      document.getElementById('wednesday').setAttribute('data-mode', "light")
      document.getElementById('thursday').setAttribute('data-mode', "light")
      document.getElementById('friday').setAttribute('data-mode', "light")
      document.getElementById('saturday').setAttribute('data-mode', "light")
      document.getElementById('sunday').setAttribute('data-mode', "light")
    } catch {
        let o = "o"
    }
  } else {
    active = darkToggle;
    notActive = lightToggle;

    localStorage.setItem("mode", "light")

    for ( let i in elements ) {
      try {
        elements[i].style.background = "rgb(30, 30, 30)"
      } catch {
        let o = "o"
      }
    }
    navigation.style.background = "rgba(30, 30, 30, 0.9)"
    try {
        eventsTitle.style.color = "rgb(30, 30, 30)"
        eventsTitle.style.background = "none"
    } catch {
        let o = "o"
    }
    try {
      document.getElementById('monday').setAttribute('data-mode', "dark")
      document.getElementById('tuesday').setAttribute('data-mode', "dark")
      document.getElementById('wednesday').setAttribute('data-mode', "dark")
      document.getElementById('thursday').setAttribute('data-mode', "dark")
      document.getElementById('friday').setAttribute('data-mode', "dark")
      document.getElementById('saturday').setAttribute('data-mode', "dark")
      document.getElementById('sunday').setAttribute('data-mode', "dark")
    } catch {
        let o = "o"
    }
  }

  active.style.opacity = "1"
  notActive.style.opacity = "0"
  return 0
}


darkToggle.addEventListener("click", () =>{
   Toggle();
});

lightToggle.addEventListener("click", () =>{
   Toggle();
});



