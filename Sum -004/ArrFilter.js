/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i], i)){
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

let fn = function greaterThan10(n) {
    return n > 10;
}

arr = [2, 3, 5, 7, 10, 12, 18];

const filterNum = filter(arr, fn);
console.log(filterNum);
