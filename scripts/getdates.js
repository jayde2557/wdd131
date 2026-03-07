const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = "Last Modified: " + lastModified;