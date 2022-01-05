const button = document.querySelector('.card__button');

const download = document.querySelector(".btn-download");

let count = 60;
let counter = setInterval(timer, 1000);

function timer() {
    count -= 1;
    if (count === -1) {
        clearInterval(counter);
        download.classList.add("active");
        return;
    }

    document.getElementById("num").innerHTML = count;
}


