//по принципу поділу, ділимо масив на підмасиви, ділимо по центру
//cамий кращий
const arr = [6,1,5,9,7,3,11,2];

//example 1
function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let midIndex = Math.floor(array.length / 2);
    let midValue = array[midIndex];
    let less = [];
    let more = [];
    for (let i = 0; i < array.length; i++) {
        if (i === midIndex) continue;
        if (array[i] < midValue) {
            less.push(array[i])
        } else {
            more.push(array[i])
        }
    }
    return [...quickSort(less), midValue, ...quickSort(more)]
}

console.log(quickSort(arr))
