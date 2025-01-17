const reverseString = function(str) {
    let result = "";
    let resultArray = [];
    let counter = -1;
    for (let i = 0; i < str.length; i++){
        resultArray[i] = str.at(counter);
        counter--;
        result += resultArray[i];
    }
    return result;
    

};

// Do not edit below this line
module.exports = reverseString;
