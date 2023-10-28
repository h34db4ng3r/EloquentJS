let todoList = [];

// adds item to end of list
function remember(task) {
    todoList.push(task);
}

// get and remove from the beginning of list
function getTask() {
    return todoList.shift();
}

// add to the beginning of the list
function rememberUrgently(task) {
    todoList.unshift(task);
}

console.log([1, 2, 3, 2, 1].indexOf(2));
console.log([1, 2, 3, 2, 1].lastIndexOf(2));