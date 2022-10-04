const palindromes = function (str) {
    modStr = str.toLowerCase().replace(/[^a-z]/g, "");
    return (modStr.split("").reverse().join("") == modStr);
};

// Do not edit below this line
module.exports = palindromes;
