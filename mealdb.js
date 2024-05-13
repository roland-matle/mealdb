const $form = document.querySelector(".js-form");
const $container = document.querySelector(".js-receptek")
const $searchInput = document.querySelector("[name=food]")
const $errorField = document.querySelector(".js-error")

function formSubmitted(event){
    event.preventDefault();
    $errorField.innerHTML = "";
    const value = $searchInput.value;
    if (value.length > 0) {

    } else {
        $errorField.innerHTML = "Hibás keresés: üres keresőkifejezés.";
    }
    console.log(value);
}

$form.addEventListener("submit", formSubmitted)