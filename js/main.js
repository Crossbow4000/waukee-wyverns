const primaryNav = document.querySelector(".navigation");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () =>{
    const visibility = primaryNav.getAttribute("data-visible")

    if (visibility === "false"){
        primaryNav.setAttribute("data-visible", true)
        navToggle.setAttribute("data-fixed", true)
    }
    else if (visibility === "true"){
        primaryNav.setAttribute("data-visible", false)
        navToggle.setAttribute("data-fixed", false)
    }
})
