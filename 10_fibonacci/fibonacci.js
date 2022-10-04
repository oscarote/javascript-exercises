const fibonacci = function(numb) {
    if (numb < 0) return "OOPS";
    let arrayFibo = [0, 1];
    for (let i = 2; i < numb + 1; i++) {
        arrayFibo[i] = arrayFibo[i-2] + arrayFibo[i-1];
    }
    return arrayFibo[numb];
};

// Do not edit below this line
module.exports = fibonacci;
