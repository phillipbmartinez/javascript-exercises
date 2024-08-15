const getTheTitles = function (books) {
    newArray = [];
    for (let i = 0; i < books.length; i++) {
        newArray.push(books[i].title);
        console.log(newArray);
    }
    return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;
