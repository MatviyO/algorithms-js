const array = [1, 4, 6,2, 8, 9,11];

function lineSearch(array, findEl) {
    for(let i=0; i< array.length; i++) {
        if (array[i] === findEl) {
            return i;
        }
    }
    return null
}

console.log(lineSearch(array, 5))
