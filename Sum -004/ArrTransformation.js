/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newArr = [];
    for(let i in arr){
        newArr.push(fn(arr[i], Number(i)))
    }
    return newArr
};

arr = [2, 9, 4, 6, 8];

let fn = function plusone(n){
    return n + 1;
}

const newArray = map(arr, fn);
console.log(newArray);
