const sumAll = function(num1,num2) {
    if (num1 < 0 || num2 < 0 || typeof(num1) !== "number" || typeof(num2) !== "number") return "ERROR";
    
    let number1;
    let number2;
    
    if (num1 < num2) {
        number1 = num1;
        number2 = num2;
    } else {
        number1 = num2;
        number2 = num1;
    }

    let sumNumbers = 0;

    for (i = number1; i < number2 + 1; i++) {
        sumNumbers += i;
    }

    return sumNumbers;
};

// Do not edit below this line
module.exports = sumAll;
