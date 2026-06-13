const foods = [
    {
        name: "Jollof Rice",
        category: "Main Dish",
        ingredients: "Rice, tomatoes, onions, peppers, spices",
        description: "A flavorful one-pot rice dish enjoyed throughout West Africa.",
        image: "images/jollof-rice.jpg"
    },

    {
        name: "Fufu",
        category: "Main Dish",
        ingredients: "Cassava, plantain",
        description: "A soft starchy dish traditionally served with soup.",
        image: "images/fufu.jpg"
    },

    {
        name: "Waakye",
        category: "Main Dish",
        ingredients: "Rice, beans, millet leaves",
        description: "A popular Ghanaian meal usually served with several side dishes.",
        image: "images/waakye.jpg"
    },

    {
        name: "Sobolo",
        category: "Drink",
        ingredients: "Hibiscus leaves, ginger, cloves",
        description: "A refreshing traditional drink with a rich red color.",
        image: "images/sobolo.jpg"
    },

    {
        name: "Bofrot",
        category: "Snack",
        ingredients: "Flour, sugar, yeast",
        description: "A sweet fried dough snack enjoyed throughout Ghana.",
        image: "images/bofrot.png"
    },

    {
        name: "Kelewele",
        category: "Snack",
        ingredients: "Plantains, ginger, pepper",
        description: "Spicy fried plantains often sold as street food.",
        image: "images/kelewele.jpg"
    },

    {
        name: "Lamugin",
        category: "Drink",
        ingredients: "Millet, sugar, water",
        description: "A traditional fermented millet drink with a tangy flavor.",
        image: "images/lamugin.jpg"
    }
];


const container = document.querySelector(".food-container");
const categorySelect = document.querySelector("#category");

function displayFoods(foodList) {

    container.innerHTML = foodList.map(food => `
        <article class="food-card">

            <img
                src="${food.image}"
                alt="${food.name}"
                loading="lazy">

            <div class="food-info">

                <span class="category-tag">
                    ${food.category}
                </span>

                <h3>${food.name}</h3>

                <p>${food.description}</p>

                <p>
                    <strong>Ingredients:</strong>
                    ${food.ingredients}
                </p>

            </div>

        </article>
    `).join("");
}

displayFoods(foods);

categorySelect.addEventListener("change", () => {

    if (categorySelect.value === "all") {

        displayFoods(foods);

    } else {

        const filteredFoods = foods.filter(food =>
            food.category === categorySelect.value
        );

        displayFoods(filteredFoods);
    }
});
