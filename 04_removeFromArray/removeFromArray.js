const removeFromArray = function(array, target) {
    output = array;
    for (let i=1; i < arguments.length; i++) {
        output = output.filter(element => !(element === arguments[i]));
    }

    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
