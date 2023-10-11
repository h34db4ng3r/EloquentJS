// Minimum

function isMinimum(first, second) {
    if (first < second) {
        return first;
    } else {
        return second;
    }
}

console.log(isMinimum(11, 9));


// Recursion

function isEven(num) {
    num = Math.abs(num);    
    if (num == 0) {
        return true;
    } else if (num == 1) {
        return false;
    } else {
        return isEven(num - 2);
    }
    
    
}

console.log(isEven(221));

// Bean Counting


// Function that counts the Character B and returns it's value
function countBs(myString) {
    let beans = 0;
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] == 'B') {
            beans++;
        } else {
            continue;
        }

    }
    return beans;
}


// function -> counts character by argument, and returns the counted ones
function countChar(myString, myChar) {
    let chars = 0;
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] == myChar) {
            chars++;
        } else {
            continue;
        }
    }
    return chars;
}
    

console.log(countChar('BpotBBatoBB', 'a'));