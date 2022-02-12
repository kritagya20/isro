
// HAMBURGER-CLOSE BUTTON SHIFT AND NAVIGATION TOGGLE
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
navToggle.addEventListener("click",() =>{
    const visibility = nav.getAttribute("data-visible");
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})

//extra details of the mission visibility through button
const ExtraInfoMoon = document.querySelector(".moon-info-extra-p");
const InfoBtn = document.querySelector(".moon-info-extra-btn");

InfoBtn.addEventListener("click",() =>{
    const visibility = ExtraInfoMoon.getAttribute("data-visible");
    if (visibility === "false") {
        // changes the attribute to false
        ExtraInfoMoon.setAttribute("data-visible", true);
        // removes no-display class display of additional information
        ExtraInfoMoon.classList.remove("no-display");
        // changes button text to Hide Details
        document.getElementById("extra-btn").innerText = "Hide Details";
    } else {
        // changes the attribute to True
        ExtraInfoMoon.setAttribute("data-visible", false);
        // Adds no-display class to stop display of additional information
        ExtraInfoMoon.classList.add("no-display");
        // changes button text to Show Details
        document.getElementById("extra-btn").innerText = "Show Details";
    }
})