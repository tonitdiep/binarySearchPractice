// Binary search
let arr = []

let start = 0 //first index of array to the function 
// let end = arr.length - 1  //last index of array, substracting 1 from the arr's length since our index starts at 0
        //indexes 0-7, 0 based. length of array is 8 since it is not zero based, last index of array 8 is actually 7
//target value, the value being search for
let target = 800 
//next buidl the function 
for (let i = 1; i<=100; i++) {
    arr.push(i)
}
let end = arr.length - 1
// console.log(arr)
function binarySearch(arr, start, end, target) {
  console.log(arr.slice(start, end));
  if (start > end) return false;
    let midIndex = Math.floor((start + end)/2) 
     //find mid index of the array
    // Math.floor built in function, return the greatest integer <= to its numeric arg
    
    //check to see if the midpoint we are actually starting  for is the target value
    if (arr[midIndex] === target) return true;

    //check if mid value at the midIndex, is great/lesser than our actual target
    if (arr[midIndex] > target) return binarySearch(arr, start, midIndex - 1, target)
        //checks if the item we are search for is at the left side of the array  
        else return binarySearch(arr, midIndex + 1, end, target)
        ///checks if the item we are search for is at the RIGHT side of the array  
    
}

//run it
console.log(binarySearch(arr, start, end, target));
