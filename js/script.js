let todo = [];

function updateMyTodo() {
    let htmlTodoList = '';
    for (let i = 0; i < todo.length; i++) {
        let todoObject = todo[i];
        const name = todoObject.name;
        const html = `<div class="grid-input">${name}
            <img src="images/ic-edit.svg" class="edit-image js-edit-image">
            <i class="fas fa-trash js-delete-icon"></i></div>`;

        htmlTodoList += html;
    }
    document.querySelector('.js-display-todo').innerHTML = htmlTodoList;

    document.querySelectorAll('.js-delete-icon').forEach((deleteIcon, index) => {
        deleteIcon.addEventListener("click", () => {
            todo.splice(index, 1);
            updateMyTodo();
        });
    });

    const displayTodo = document.querySelector('.js-display-todo');

    document.querySelectorAll('.js-edit-image').forEach((editIcon, index) => {
        editIcon.addEventListener("click", (event) => {
            displayTodo.contentEditable = true;
            displayTodo.focus();
        });
    });

    displayTodo.addEventListener("keydown", (event) => {
        if (event.key === 'Enter') {
            displayTodo.contentEditable = false;
            todo[index].name = displayTodo.textContent;
            updateMyTodo();
        }
    });
}

function myTodo() {
    const input = document.querySelector('.js-input');
    const nameInput = input.value;
    todo.push({
        name: nameInput
    });

    input.value = '';
    updateMyTodo();
}

const addList = document.querySelector('.js-input');
addList.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        myTodo();
    }
});

const addButton = document.querySelector('.js-add-button');
addButton.addEventListener("click", (event) => {
    myTodo();
});
