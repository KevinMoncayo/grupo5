const button = document.querySelector(".hamburger")
const nav_menu = document.querySelector(".navigation_content")
var hamb_bar1 = document.querySelector(".hamburger_line1")
var hamb_bar2 = document.querySelector(".hamburger_line2")
var hamb_bar3 = document.querySelector(".hamburger_line3")

button.addEventListener("click", () => {
    hamb_bar1.classList.toggle("active_hamburger_line1")
    hamb_bar2.classList.toggle("active_hamburger_line2")
    hamb_bar3.classList.toggle("active_hamburger_line3")
    nav_menu.classList.toggle("navigation_content_visible");
})