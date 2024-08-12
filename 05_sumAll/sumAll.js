const sumAll = function(num1, num2) {
    let total = 0;

    if (typeof num1 !== 'number') {
        return "ERROR";
    } else if (typeof num2 !== 'number') {
        return "ERROR";
    } else if (Number.isInteger(num1) === false) {
        return "ERROR";
    }
    else if (Number.isInteger(num1) === false) {
        return "ERROR";
    } 
    else if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (num1 > num2) {
        for (i = 0; i <= num1; i++) {
            total += i;
            console.log(`i = ${i}`);
            console.log(`Total = ${total}`)
        }
    } 
    else {
        for (i = 0; i <= num2; i++) {
            total += i;
            console.log(`i = ${i}`);
            console.log(`Total = ${total}`)
        }
    }

    console.log(total);
    return total;
};

sumAll(4, 1);

// Do not edit below this line
module.exports = sumAll;
