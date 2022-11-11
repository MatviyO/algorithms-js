const arr = [1,2,3,4,5,6,7,8,9, 10, 11, 12, 13, 14];
let count1 = 0;
let count2 = 0;

//fast after binary recursion ,  2 rating number
function binarySearch(array, item) {
    let start = 0;
    let end = array.length
    let mid;
    let found = false;
    let position = -1;
    while (found === false && start <= end) {
        count1++;
         mid = Math.floor((start + end )/ 2)
        if (array[mid] === item) {
            found = true;
            position = mid;
            return position;
        }
        if (array[mid] > item) {
            end = mid -1
        } else {
            start = mid + 1;
        }
    }
    return position
}
console.log(binarySearch(arr, 10));
console.log(count1);

//example 2,  binary search with recursion , best fast , 1 rating number
function binarySearchRecursion(array, item, start, end) {
    let middle = Math.floor((start + end) / 2);
    if (item === array[middle]) return middle;
    count2++;
    if (item < array[middle]) {
        return binarySearchRecursion(array, item, start, middle - 1)
    } else {
        return binarySearchRecursion(array, item, middle + 1, end)
    }
}

console.log(binarySearchRecursion(arr, 10, 0 ,arr.length));
console.log(count2);
