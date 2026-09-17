const searchButton = document.querySelector(".search-submit");
const searchWrapper = document.querySelector(".input-wrapper");

searchButton.addEventListener("click", function () {
    searchWrapper.classList.toggle("active");
});

const menuToggle = document.querySelector(".menu-toggle");
const bar2 = document.getElementById("bar2");

menuToggle.addEventListener("click", function () {
    bar2.classList.toggle("active");
});