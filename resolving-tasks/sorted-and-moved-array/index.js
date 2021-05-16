const arr = [6, 7, 8, 11, 10, 5, 3];

let currentIndexArray = function(array) {

    let start = 0;
    let end = array.length - 1;

    while (start < end) {
        let middle = Math.floor((start + end) / 2)

        if (array[middle] < array[middle + 1]) {
            start = middle + 1;
        } else {
            end = start;
        }
    }
    return start
}

console.log(currentIndexArray(arr))