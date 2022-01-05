const formatData = [
    {
        id: 1,
        format: "YYYY-MM-DD"
    },
    {
        id: 2,
        format: "DD/MM/YYYY"
    },
    {
        id: 3,
        format: "DD.MM.YYYY"
    },
    {
        id: 4,
        format: "DD, MMM YYYY"
    },
    {
        id: 5,
        format: "DD, MMMM YYYY"
    },
]




let tableBody = document.querySelector("#table-body");

const convertDataAndInsertTodo = () => {
    tableBody.innerHTML = '';

    formatData.forEach((e) => {

        let convertResult = moment(`${parseInt(dateInput.value)}/${parseInt(monthInput.value)}/${parseInt(yearInput.value)}`, "DD/MM/YYYY");
        let res = convertResult.format(e.format);
        let todoItem = `
        <tr>
            <th scope="row" id='task-id'>${e.id}</th>
            <td >${res}</td>
        </tr>`;

        tableBody.innerHTML += todoItem;
    })

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



