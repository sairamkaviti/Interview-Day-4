// Remove particular element from an array :
// METHOD ONE : USING INDEXOF AND SPLICE
let array = [1, 2, 3, 4, 5, 6];
function display(arr, n) {
    let ind = arr.indexOf(n);
    console.log(ind);
    let result = arr.splice(ind, 1);
    console.log(result);
    return arr;
}
console.log(display(array, 4));

// METHOD TWO : FILTERS;
function removeEle(arr, n) {
    let result = arr.filter((ele) => {
        return ele !== n;
    })
    console.log(result)
    return result;
}
console.log(removeEle(array, 6));

// METHOD THREE :USING LOOPS :
let nums=[1,2,3,4,5,6]
function eleRemove(arr, n) {
    let result = [];
    for (let ele of arr) {
        
        if (ele!== n) {
            result.push(ele);
             
        }
        
    }
    return result;
}
console.log(eleRemove(nums,3))