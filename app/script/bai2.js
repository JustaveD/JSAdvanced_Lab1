

const name = document.getElementById('name');
const cardnumber = document.getElementById('cardnumber');
const expirationdate = document.getElementById('expirationdate');

const outputNumber = document.querySelector("#svgnumber");

const outputName = document.querySelector("#svgname");

name.addEventListener('keyup', () => {
    outputName.innerHTML = name.value;
})
cardnumber.addEventListener('keyup', (e) => {

    let number = cardnumber.value;
    if (number.replace(/\s/g, "").length % 4 == 0 && number.length != 0 && number.length <= 16) {
        cardnumber.value += " ";
    }
    console.log(number.length);
    outputNumber.innerHTML = cardnumber.value;
})




