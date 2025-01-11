function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function displayNone(event) {
    let card = event.currentTarget.closest(".card")
    let card_description = card.querySelector(".card-description")
    card_description.style.display = "none"
    delay(1).then(() => card.classList.toggle("hovered-card"));
}

function showDescription(element) {
    let card = element.closest(".card")
    let card_description = card.querySelector(".card-description")
    let card_lock = card.querySelector(".arrow-class");


    if (!card_description.classList.contains("showed_card_description")) {
        card_lock.src = cardOpenImgSrc;
        card_description.removeEventListener('animationend', displayNone);
        card.classList.toggle("hovered-card")
        card_description.classList.toggle("showed_card_description")
        card_description.style.animationName = "rotate-description"
        card_description.style.display = "block"

    } else if (card_description.classList.contains("showed_card_description")) {
        card_lock.src = cardLockImgSrc
        card_description.classList.toggle("showed_card_description")
        card_description.style.animationName = "close-description"
        card_description.addEventListener("animationend", displayNone);


    }
}

function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// Scroll to the element with ID from query parameter
window.onload = function () {
    const scrollToId = getQueryParam('scroll_to');
    if (scrollToId) {
        const element = document.getElementById(`card-${scrollToId}`);
        if (element) {
            element.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
    }
};
