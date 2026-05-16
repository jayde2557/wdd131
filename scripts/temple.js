const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = "Last Modified: " + lastModified;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});
