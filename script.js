const openDrawerBtn = document.querySelector(".open-drawer");
const closeDrawerBtn = document.querySelector(".close-drawer");
const drawer = document.getElementById("drawer");
const container = document.getElementById("container");


openDrawerBtn.addEventListener("click", () => {
    container.style.opacity = "0.4"
    drawer.style.left = "0"
})


closeDrawerBtn.addEventListener("click", () => {
    container.style.opacity = "1"
    drawer.style.left = "-250px"
})