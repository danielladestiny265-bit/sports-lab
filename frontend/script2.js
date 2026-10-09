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
// MOBILE CATEGORIES DROPDOWN
const categoryDropdown = document.querySelector("#bar2 .category-dropdown");
const categoryLink = categoryDropdown.querySelector(":scope > a");
const dropdown = categoryDropdown.querySelector(":scope > .dropdown");

// Open and close Categories
categoryLink.addEventListener("click", function (event) {
    event.preventDefault();
    dropdown.classList.toggle("show");
});
const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".category-card");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
        const filter = button.dataset.filter;
        cards.forEach(card => {

            if(filter === "all" || card.dataset.category === filter){
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});