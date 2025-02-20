document.addEventListener("DOMContentLoaded", function() {
    const textBox = document.getElementById("textBox");
    const searchBtn = document.getElementById("searchBtn");

    const hoverBtn = document.querySelector(".hover-btn");
    const focusBtn = document.querySelector(".focus-btn");
    const activeBtn = document.querySelector(".active-btn");

    textBox.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            textBox.classList.add("active");
            searchBtn.classList.add("active");
            searchBtn.removeAttribute("disabled");
        }
    });

    searchBtn.addEventListener("click", function () {
        if (textBox.value.trim() === "") {
            alert("Please enter a search term.");
        }
    });

    hoverBtn.addEventListener("click", function () {
        textBox.classList.toggle("hover-effect");
    });

    focusBtn.addEventListener("click", function () {
        textBox.focus();
    });

    activeBtn.addEventListener("click", function () {
        textBox.classList.add("active-effect");
        setTimeout(() => textBox.classList.remove("active-effect"), 200); 
    });
});