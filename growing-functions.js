// Example 1

/*

function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);

*/

// example 2

/*

function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "cows");
    printZeroPaddedWithLabel(chickens, "chickens");
    printZeroPaddedWithLabel(pigs, "pigs");
}

printFarmInventory(7, 11, 3);

*/

// example 3

/*

function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

*/

// My experimental version

function stringFormatting(number, animal) {
    this.animal = animal;
    this.number = number;
    this.formatString = function() {
        number = String(number);
        while (number.length < 3) {
            number = "0" + number;
        }
        return number + " " + animal;

    }
}

function farmInventory(number, animal) {
    let checkInventory;
    animal = new stringFormatting(number, animal)
    checkInventory = animal.formatString();
    console.log(checkInventory);
}

farmInventory(11, "pigs");
farmInventory(3, "chickens");
farmInventory(7, "cows");




