// 1 means finished
// 0 means in progress

const todoData = [
    {
        id: 1,
        name: "Mua đồ tết",
        status: 0
    },
    {
        id: 2,
        name: "Vá lốp xe máy",
        status: 1
    },
    {
        id: 3,
        name: "Đăng ký khóa học JS nâng cao của thầy Mua",
        status: 1
    },
]

let tableBody = document.querySelector("#table-body");

const convertDataAndInsertTodo = () => {
    tableBody.innerHTML = '';
    const todoDataWithStatusInText = todoData.map((e) => {
        return {
            id: e.id,
            name: e.name,
            status: e.status ? "Đã xong" : "Đang làm"
        }
    })
    todoDataWithStatusInText.forEach((e) => {
        let todoItem = `
        <tr>
        <th scope="row" id='task-id'>${e.id}</th>
        <td>${e.name}</td>
        <td>${e.status}</td>
        <td>
            <button type="submit" class="btn btn-danger" id="delete-btn">Delete</button>
            <button type="submit" class="btn btn-success ms-1" id="finish-btn">Finished</button>
        </td>
        </tr>`;

        tableBody.innerHTML += todoItem;
    })

}
convertDataAndInsertTodo();

// Add new task
const addTaskInput = document.querySelector(".add-tast-input");
const addTaskBtn = document.querySelector(".add-task-btn");

addTaskBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (addTaskInput.value == '') return false;
    let lastId = [...todoData].pop().id;
    let newTask = {
        id: lastId + 1,
        name: addTaskInput.value,
        status: 0,
    }
    todoData.push(newTask);

    convertDataAndInsertTodo();
    addTaskInput.value = '';

})



