const removeFromArray = function(...args) {
    const array = args[0];
    return array.filter(toDelete => !args.includes(toDelete));
};

// Do not edit below this line
module.exports = removeFromArray;
