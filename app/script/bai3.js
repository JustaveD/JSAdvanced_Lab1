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
        <th scope="row">${e.id}</th>
        <td>${e.name}</td>
        <td>${e.status}</td>
    </tr>`;

    tableBody.innerHTML += todoItem;
})

