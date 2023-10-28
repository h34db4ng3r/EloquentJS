// function that accepts any amount of arguments
// with triple dot notation ...
function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if(number > result) result = number;
    }
    return result;
}
console.log(max(4, 1, 9, -2));

// this also works
let numbers = [5, 1, 7];
console.log(max(...numbers));

let words = ['never', 'fully'];
console.log(['will', ...words, 'understand']);
