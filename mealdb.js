const $form = document.querySelector(".js-form");
const $container = document.querySelector(".js-receptek")
const $searchInput = document.querySelector("[name=food]")
const $errorField = document.querySelector(".js-error")

const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

function getApiUrl (search) {
    return API_URL + search
}

function renderRecipe(response){
    console.log("render", response);
    let meals = response.meals;
    let html = "";
    if (meals === null) {
        $errorField.innerHTML = "Nincs találat.";
        return;
    }
    for (let meal of meals) {
        html += `
            <section class="meal">
                <h3>${meal.strMeal}</h3>
                <p>${meal.strInstructions}</p>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="meal-thumbnail-img">
            </section>
        `;
    }
    if (html.length > 0){
        $container.innerHTML = html;
    } else {
        $errorField.innerHTML = "Nincs találat.";
    }
}

function formSubmitted(event) {
    event.preventDefault();
    const value = $searchInput.value.trim();
    $container.innerHTML = "";
    if (value.length > 0) {
        $errorField.innerHTML = "";
        fetch(getApiUrl(value))
            .then((data) => data.json())
            .then(renderRecipe);
    } else {
        $errorField.innerHTML = "Hibás keresés: üres keresőkifejezés.";
    }
    console.log(value);
}

$form.addEventListener("submit", formSubmitted)