const removeFromArray = function(arr, ...elems) {
    let result = [];
    for (let i = 0; i < arr.length; i++){
        if (elems.indexOf(arr[i]) == -1){
            result.push(arr[i])
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
