// const removeFromArray = function() {
// };

function removeFromArray(array, removeItem) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== removeItem) {
            newArray.push(array[i]);
        }
    }
    console.log(`array: ${array}`);
    console.log(`emptyArray: ${newArray}`);
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
