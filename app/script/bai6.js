




let tableBody = document.querySelector("#table-body");

const convertDataAndInsertTodo = () => {
    tableBody.innerHTML = '';


    let convertResult = moment(`${parseInt(dateInput.value)}/${parseInt(monthInput.value)}/${parseInt(yearInput.value)}`, "DD/MM/YYYY");
    let res = convertResult.format("dddd");
    let todoItem = `
        <tr>
          
            <td >${res}</td>
        </tr>`;

    tableBody.innerHTML += todoItem;


}


// Add new task
const dateInput = document.querySelector(".date-input");
const monthInput = document.querySelector(".month-input");
const yearInput = document.querySelector(".year-input");
const convertBtn = document.querySelector(".convert-date-btn");

convertBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (dateInput.value == '') return false;
    if (monthInput.value == '') return false;
    if (yearInput.value == '') return false;

    convertDataAndInsertTodo();
    dateInput.value = '';
    monthInput.value = '';
    yearInput.value = '';

})



