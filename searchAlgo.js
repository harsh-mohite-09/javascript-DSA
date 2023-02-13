///////////////////////////////////////////////////
// Linear Search

// Given an array of 'n' elements and a target element 't', find the indes of 't' in the array,
// Return -1 if the target element is not found.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// Big-O => O(n)-linear
// console.log(linearSearch(arr, target));

///////////////////////////////////////////////////
// Binary Search

// Given a SORTED array of 'n' elements and a target element 't', find the indes of 't' in the array,
// Return -1 if the target element is not found.

// function binarySearch(arr, target) {
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;

//   while (leftIndex <= rightIndex) {
//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//     if (target === arr[middleIndex]) return middleIndex;
//     if (target > arr[middleIndex]) {
//       leftIndex = middleIndex + 1;
//     } else {
//       rightIndex = middleIndex - 1;
//     }
//   }
//   return -1;
// }

// Big-O => O(log(n)) - logarithmic

// console.log(binarySearch([-5, 2, 4, 6, 10], 10)); //4
// console.log(binarySearch([-5, 2, 4, 6, 10], 6)); //3
// console.log(binarySearch([-5, 2, 4, 6, 10], 20)); //-1

///////////////////////////////////////////////////
// Binary Search RECURSIVE SOLUTION

// Given a SORTED array of 'n' elements and a target element 't', find the indes of 't' in the array,
// Return -1 if the target element is not found.

function binarySearchRecursive(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) return -1;

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) return middleIndex;

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

// Big-O => O(log(n)) - logarithmic

console.log(binarySearchRecursive([-5, 2, 4, 6, 10], 10)); //4
console.log(binarySearchRecursive([-5, 2, 4, 6, 10], 6)); //3
console.log(binarySearchRecursive([-5, 2, 4, 6, 10], 20)); //-1
