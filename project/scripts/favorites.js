const form = document.querySelector("#favorite-form");
const favoriteList = document.querySelector("#favorite-list");

let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

function displayFavorites() {

    if (favorites.length === 0) {
        favoriteList.innerHTML = `<p> No favorites submitted yet. Be the first! </p>`;
        return;
    }

    favoriteList.innerHTML = favorites.map(item => `
        <article class="favorite-card">
            <h3>${item.food}</h3>

            <p>
                <strong>Submitted by:</strong>
                ${item.name}
            </p>

            <p>${item.reason}</p>

        </article>
    `).join("");
}

function saveFavorite(event) {

    event.preventDefault();

    const name = form.name.value.trim();
    const food = form.food.value.trim();
    const reason = form.reason.value.trim();

    if (!name || !food || !reason) {
        return;
    }

    const favorite = {
        name,
        food,
        reason
    };

    favorites.push(favorite);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    displayFavorites();

    form.reset();
}

form.addEventListener("submit", saveFavorite);

displayFavorites();
