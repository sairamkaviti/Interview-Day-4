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
  });
  console.log(result);
  return result;
}
console.log(removeEle(array, 6));

// METHOD THREE :USING LOOPS :
let nums = [1, 2, 3, 4, 5, 6];
function eleRemove(arr, n) {
  let result = [];
  for (let ele of arr) {
    if (ele !== n) {
      result.push(ele);
    }
  }
  return result;
}
console.log(eleRemove(nums, 3));

// ........................//...............//

// Write a function to check two strings are anagrams or not :

function checkAnnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    console.log(
      `length not matched,so ${str1} and ${str2} cannot be annagrams`
    );
    return false;
  }
  let checkFirst = str1.toLowerCase().split("").sort().join("");
  let checkSecond = str2.toLowerCase().split("").sort().join("");
  return checkFirst == checkSecond;
}
console.log(checkAnnagrams("liSten", "silEnt"));

function areAnagrams(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }
  let charCount = {};
    for (let char of str1) {
        if (charCount[char]){
            charCount[char] += 1;
        } else {
            charCount[char] = 1;
      }
        // charCount[char] = (charCount[char] || 0) + 1;
        
  }

  for (let char of str2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  for (let count in charCount) {
    if (charCount[count] !== 0) {
      return false;
    }
  }

  return true;
}

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("hello", "world"));
console.log(areAnagrams("Triangle", "Integral"));
console.log(areAnagrams("aabb", "bbaa"));
console.log(areAnagrams("rat", "car"));

function checkingFn(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if (str1.length !== str2.length) {
        return false;
    }
    let charCount = {};
    for (let char in str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char in str2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    for (let count in charCount) {
        if (charCount[count] !== 0) {
            return false;
        }
    }
    return true;
}
console.log(checkingFn("listen", "silent"));
console.log(checkingFn("hello", "helo"));

