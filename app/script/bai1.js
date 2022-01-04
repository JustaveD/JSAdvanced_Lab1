const container = document.querySelector(".container");

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener('mouseover', () => {
        let color = card.getAttribute("data");

        container.style.backgroundColor = color;
    })


})