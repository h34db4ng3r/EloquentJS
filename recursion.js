// Example 1

/*
function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

console.log(power(2, 4));

*/

// Example 2

/*

function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||     // this is the part that does the recursion
                   find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(1));

*/

// What is recursion - in depth
// web dev simplified, yt
// https://www.youtube.com/watch?v=6oDQaB2one8

// example 1

function countDown(n) {
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
    console.log('Hooray');
}

countDown(3)

// recursive version

function countDownRecursive(n) {
    if (n <= 0) {
        console.log('Hooray');
        return
    }
    console.log(n);
    countDownRecursive(n - 1);
}

/*

countDownRecursive(3);
  countDownRecursive(2);
    countDownRecursive(1);
      countDownRecursive(0);
        return;
    return;
  return;
return;

*/

// example 2

function sumRange(n) {
    let total = 0;
    for (let i = n; i > 0; i--) {
        total += 1;
    }
    return total;
}

// recursive version

function sumRangeRecursive(n, total) {
    if (n <= 0) {
        return total;
    }
    return sumRangeRecursive(n - 1, total + n)
}

/*

sumRangeRecursive(3, 0)
  sumRangeRecursive(2, 3)
    sumRangeRecursive(1, 5)
      sumRangeRecursive(0, 6)
        return 6;

        */



// example 3

function printChildren(t) {
    // ??
}

function printChildrenRecursive(t) {
    if (t.children.length === 0) {
        return;
    }
    t.children.forEach(child => {
        console.log(child.name);
        printChildrenRecursive(child);        
    });
}

const tree = {
    name: 'John',
    children: [
    {
        name: 'Jim',
        children: []
},
    {
    name: 'Zoe',
    children: [
        { name: 'Kyle', children: [] },
        { name: 'Sophia', children: [] }
      ]
    }
  ] 
}

printChildrenRecursive(tree);

/*
printChildrenRecursive('John')
  printChildrenRecursive('John')
  return
  printChildrenRecursive('Zoe')
    printChildrenRecursive('Kyle')
    return
    printChildrenRecursive('Sophia')
    return
  return
return




*/