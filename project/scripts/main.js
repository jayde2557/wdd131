const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});

const facts = [
    "Fufu is one of Ghana's most famous traditional dishes.",
    "Sobolo is made from hibiscus leaves.",
    "Waakye is traditionally served with several side dishes.",
    "Jollof Rice is popular throughout West Africa."
];

const randomFact = facts[Math.floor(Math.random() * facts.length)];

document.querySelector("#fact").textContent = randomFact;

document.querySelector("#currentyear").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;