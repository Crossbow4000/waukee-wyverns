let lightToggle = document.getElementById("sun");
let darkToggle = document.getElementById("moon");

elements = document.getElementsByClassName("dark-toggle");

navigation = document.getElementsByClassName("navigation")[0];


if ( sessionStorage.getItem("mode") != "light" || sessionStorage.getItem("mode") != "dark" ) {
  sessionStorage.setItem("mode", "light")
}


if ( sessionStorage.getItem("mode") == "light")  {
  active = darkToggle;
  notActive = lightToggle;

  for ( let i in elements ) {
    try {
      elements[i].style.background = "white"
    } catch {
      let o = "o"
    }
  }
  navigation.style.background = "rgba(255, 255, 255, 0.9)"
} else {
  active = lightToggle;
  notActive = darkToggle;


  for ( let i in elements ) {
    try {
      elements[i].style.background = "rgb(30, 30, 30)"
    } catch {
      let o = "o"
    }
  }
  navigation.style.background = "rgba(30, 30, 30, 0.9)"
}



active.style.opacity = "1"
notActive.style.opacity = "0"



function Toggle() {
  if ( sessionStorage.getItem("mode") == "light")  {
    active = darkToggle;
    notActive = lightToggle;

    sessionStorage.setItem("mode", "dark")

    for ( let i in elements ) {
      try {
        elements[i].style.background = "white"
      } catch {
        let o = "o"
      }
    }
    navigation.style.background = "rgba(255, 255, 255, 0.9)"
  } else {
    active = lightToggle;
    notActive = darkToggle;

    sessionStorage.setItem("mode", "light")

    for ( let i in elements ) {
      try {
        elements[i].style.background = "rgb(30, 30, 30)"
      } catch {
        let o = "o"
      }
    }
    navigation.style.background = "rgba(30, 30, 30, 0.9)"
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



