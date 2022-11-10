const arr = [1,2,3,4,5,6,7,8,9];

function binarySearch(array, item) {
    let start = 0;
    let end = array.length
    let found = false;
    let position = -1;
    while (!found && start <= end) {
        let mid = Math.floor(start + end / 2)
        if (array[mid] === item) {
            found = true;
            let position = mid;
            return position;
        }
        if (array[mid] > item) {
            end = mid -1
        } else {
            start = mid + 1;
        }
    }
}

console.log(binarySearch(arr));
